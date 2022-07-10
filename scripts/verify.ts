import { run, ethers } from "hardhat";

// connecting to the .env
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS ?? "";

async function verify() {
    await run("verify:verify", {
        constructorArguments: [
            "Danii",
            "DANII",
            ethers.utils.parseUnits("31801783.659820959115981", 18),
            18,
        ],
    });
}

verify().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});