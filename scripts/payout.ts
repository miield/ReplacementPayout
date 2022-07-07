import { ethers } from "hardhat";
import fs from "fs";
import path from "path";

// reading the JSON file and parsing it into a JSON object
const file = fs.readFileSync(
    path.resolve(__dirname, "hbt-holdings-2021-10-01.json"), {
    encoding: "utf8"
    });
const jsonObject = JSON.parse(file);

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS ?? "";

const payouts: any[] = jsonObject;

async function main() {
    const genii = await ethers.getContractAt("Genii", CONTRACT_ADDRESS);
    const total = payouts.length;
    let index = 1;
    for (const account of payouts) {
    console.log("Processing ", index, "/", total);
    await genii.transfer(account.wallet, account.balance);
    console.log("Processed ", index, "/", total);
    index += 1;
    }
}
​
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});