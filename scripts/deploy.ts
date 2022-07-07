// importing ethers (ethereum libraries to interract with the ethereum blockchain)
import { ethers } from "hardhat"; 
import hre from "hardhat"; // import hardhat runtime environment for Typscript


async function main() {

  // to get owner/deployer 
  const [deployer] = await hre.ethers.getSigners();

  const name = "Danii";
  const symbol = "DANII";

  // incase of payout 
  // const totalSupply = hre.ethers.utils.parseUnits("31801783.659820959115981", 15);
  
  const totalSupply = 10000000000;
  const decimal = 18;

  // We get the contract to deploy
  const Danii = await ethers.getContractFactory("Danii"); // explicitely calling the hre for typescript (hre.ether!!!)

  // Connecting with the ethers.getSigners (deployer) to get the deployer/owner to deploy
  const danii = await Danii.connect(deployer).deploy(name, symbol, totalSupply, decimal); 
  await danii.deployed();
  console.log("Danii deployed to:" , danii.address);

  // change of ownership
  let ownerAddress = process.env.OWNER_ADDRESS ?? deployer.address; // ????????
  if(ownerAddress.toLowerCase() !== deployer.address.toLowerCase()) { // to make proper queries change all the uppercase letters in the address to all lowercase
    danii.connect(deployer).transferOwnership(ownerAddress); // calling the transferOwnership from the ownable contract
    console.log("Danii Ownership was transfered to:", ownerAddress);
  }

  // // Spliting transaction (maybe)!!
  // if (['hardhat', 'localhost'].includes(hre.network.name)) {
  //   const Disperse = await hre.ethers.getContractFactory("contracts/Disperse.sol:Disperse");

  //   const disperse = await Disperse.connect(deployer).deploy();
  //   await disperse.deployed();
  //   console.log("Disperse was deployed to:", disperse.address);
  // }

  // if (['mainnet', 'testnet'].includes(hre.network.name)) {
  //   await hre.run("verify:verify", {
  //     address: danii.address,
  //     constructorArguments: [
  //       name,
  //       symbol,
  //       totalSupply,
  //       decimal
  //     ],
  //   });
  // }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
