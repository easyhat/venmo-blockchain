const { ethers, run, network } = require('hardhat')

async function main() {
  const [deployer] = await ethers.getSigners()
  const balanceOnWei = await deployer.getBalance()
  console.log(
    `Your balance is ${ethers.utils.formatUnits(balanceOnWei, 'ether')} ETH`
  )
  // deploy contract
  const venmoFactory = await ethers.getContractFactory('Venmo')
  console.log('Deploying Contract ...')
  const venmo = await venmoFactory.deploy()
  await venmo.deployed()
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API) {
    await venmo.deployTransaction.wait(6)
    await verify(venmo.address, [])
  }
}

async function verify(contractAddress, args) {
  console.log('Verifying Contract ...')

  try {
    run('verify:verify', {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (err) {
    if (err.message.toLowerCase().includes('already verified')) {
      console.log('Already Verified')
    } else {
      console.error(err)
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
