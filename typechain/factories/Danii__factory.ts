/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Danii, DaniiInterface } from "../Danii";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "setSymbol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620023be380380620023be83398181016040528101906200003791906200060b565b8383620000596200004d620000f660201b60201c565b620000fe60201b60201c565b81600490805190602001906200007192919062000345565b5080600590805190602001906200008a92919062000345565b5050508360069080519060200190620000a592919062000345565b508260079080519060200190620000be92919062000345565b5080600860006101000a81548160ff021916908360ff160217905550620000ec3383620001c260201b60201c565b505050506200085c565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000234576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200022b906200071c565b60405180910390fd5b62000248600083836200033b60201b60201c565b80600360008282546200025c91906200076d565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002b491906200076d565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200031b9190620007db565b60405180910390a362000337600083836200034060201b60201c565b5050565b505050565b505050565b828054620003539062000827565b90600052602060002090601f016020900481019282620003775760008555620003c3565b82601f106200039257805160ff1916838001178555620003c3565b82800160010185558215620003c3579182015b82811115620003c2578251825591602001919060010190620003a5565b5b509050620003d29190620003d6565b5090565b5b80821115620003f1576000816000905550600101620003d7565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200045e8262000413565b810181811067ffffffffffffffff8211171562000480576200047f62000424565b5b80604052505050565b600062000495620003f5565b9050620004a3828262000453565b919050565b600067ffffffffffffffff821115620004c657620004c562000424565b5b620004d18262000413565b9050602081019050919050565b60005b83811015620004fe578082015181840152602081019050620004e1565b838111156200050e576000848401525b50505050565b60006200052b6200052584620004a8565b62000489565b9050828152602081018484840111156200054a57620005496200040e565b5b62000557848285620004de565b509392505050565b600082601f83011262000577576200057662000409565b5b81516200058984826020860162000514565b91505092915050565b6000819050919050565b620005a78162000592565b8114620005b357600080fd5b50565b600081519050620005c7816200059c565b92915050565b600060ff82169050919050565b620005e581620005cd565b8114620005f157600080fd5b50565b6000815190506200060581620005da565b92915050565b60008060008060808587031215620006285762000627620003ff565b5b600085015167ffffffffffffffff81111562000649576200064862000404565b5b62000657878288016200055f565b945050602085015167ffffffffffffffff8111156200067b576200067a62000404565b5b62000689878288016200055f565b93505060406200069c87828801620005b6565b9250506060620006af87828801620005f4565b91505092959194509250565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000704601f83620006bb565b91506200071182620006cc565b602082019050919050565b600060208201905081810360008301526200073781620006f5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200077a8262000592565b9150620007878362000592565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620007bf57620007be6200073e565b5b828201905092915050565b620007d58162000592565b82525050565b6000602082019050620007f26000830184620007ca565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200084057607f821691505b602082108103620008565762000855620007f8565b5b50919050565b611b52806200086c6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80637a1395aa116100a2578063a9059cbb11610071578063a9059cbb146102bc578063b84c8246146102ec578063c47f002714610308578063dd62ed3e14610324578063f2fde38b146103545761010b565b80637a1395aa146102345780638da5cb5b1461025057806395d89b411461026e578063a457c2d71461028c5761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806370a08231146101fa578063715018a61461022a5761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b60405161012591906110ff565b60405180910390f35b610148600480360381019061014391906111c9565b610402565b6040516101559190611224565b60405180910390f35b610166610425565b604051610173919061124e565b60405180910390f35b61019660048036038101906101919190611269565b61042f565b6040516101a39190611224565b60405180910390f35b6101b461045e565b6040516101c191906112d8565b60405180910390f35b6101e460048036038101906101df91906111c9565b610475565b6040516101f19190611224565b60405180910390f35b610214600480360381019061020f91906112f3565b6104ac565b604051610221919061124e565b60405180910390f35b6102326104f5565b005b61024e6004803603810190610249919061134c565b61057d565b005b610258610617565b6040516102659190611388565b60405180910390f35b610276610640565b60405161028391906110ff565b60405180910390f35b6102a660048036038101906102a191906111c9565b6106d2565b6040516102b39190611224565b60405180910390f35b6102d660048036038101906102d191906111c9565b610749565b6040516102e39190611224565b60405180910390f35b610306600480360381019061030191906114d8565b61076c565b005b610322600480360381019061031d91906114d8565b610802565b005b61033e60048036038101906103399190611521565b610898565b60405161034b919061124e565b60405180910390f35b61036e600480360381019061036991906112f3565b61091f565b005b60606006805461037f90611590565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab90611590565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d610a16565b905061041a818585610a1e565b600191505092915050565b6000600354905090565b60008061043a610a16565b9050610447858285610be7565b610452858585610c73565b60019150509392505050565b6000600860009054906101000a900460ff16905090565b600080610480610a16565b90506104a18185856104928589610898565b61049c91906115f0565b610a1e565b600191505092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104fd610a16565b73ffffffffffffffffffffffffffffffffffffffff1661051b610617565b73ffffffffffffffffffffffffffffffffffffffff1614610571576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056890611692565b60405180910390fd5b61057b6000610ef5565b565b610585610a16565b73ffffffffffffffffffffffffffffffffffffffff166105a3610617565b73ffffffffffffffffffffffffffffffffffffffff16146105f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f090611692565b60405180910390fd5b80600860006101000a81548160ff021916908360ff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606007805461064f90611590565b80601f016020809104026020016040519081016040528092919081815260200182805461067b90611590565b80156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b5050505050905090565b6000806106dd610a16565b905060006106eb8286610898565b905083811015610730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072790611724565b60405180910390fd5b61073d8286868403610a1e565b60019250505092915050565b600080610754610a16565b9050610761818585610c73565b600191505092915050565b610774610a16565b73ffffffffffffffffffffffffffffffffffffffff16610792610617565b73ffffffffffffffffffffffffffffffffffffffff16146107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611692565b60405180910390fd5b80600790805190602001906107fe929190610fc3565b5050565b61080a610a16565b73ffffffffffffffffffffffffffffffffffffffff16610828610617565b73ffffffffffffffffffffffffffffffffffffffff161461087e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087590611692565b60405180910390fd5b8060069080519060200190610894929190610fc3565b5050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610927610a16565b73ffffffffffffffffffffffffffffffffffffffff16610945610617565b73ffffffffffffffffffffffffffffffffffffffff161461099b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099290611692565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a01906117b6565b60405180910390fd5b610a1381610ef5565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8490611848565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610afc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af3906118da565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610bda919061124e565b60405180910390a3505050565b6000610bf38484610898565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c6d5781811015610c5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5690611946565b60405180910390fd5b610c6c8484848403610a1e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ce2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd9906119d8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4890611a6a565b60405180910390fd5b610d5c838383610fb9565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610de3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dda90611afc565b60405180910390fd5b818103600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e7891906115f0565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610edc919061124e565b60405180910390a3610eef848484610fbe565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b828054610fcf90611590565b90600052602060002090601f016020900481019282610ff15760008555611038565b82601f1061100a57805160ff1916838001178555611038565b82800160010185558215611038579182015b8281111561103757825182559160200191906001019061101c565b5b5090506110459190611049565b5090565b5b8082111561106257600081600090555060010161104a565b5090565b600081519050919050565b600082825260208201905092915050565b60005b838110156110a0578082015181840152602081019050611085565b838111156110af576000848401525b50505050565b6000601f19601f8301169050919050565b60006110d182611066565b6110db8185611071565b93506110eb818560208601611082565b6110f4816110b5565b840191505092915050565b6000602082019050818103600083015261111981846110c6565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061116082611135565b9050919050565b61117081611155565b811461117b57600080fd5b50565b60008135905061118d81611167565b92915050565b6000819050919050565b6111a681611193565b81146111b157600080fd5b50565b6000813590506111c38161119d565b92915050565b600080604083850312156111e0576111df61112b565b5b60006111ee8582860161117e565b92505060206111ff858286016111b4565b9150509250929050565b60008115159050919050565b61121e81611209565b82525050565b60006020820190506112396000830184611215565b92915050565b61124881611193565b82525050565b6000602082019050611263600083018461123f565b92915050565b6000806000606084860312156112825761128161112b565b5b60006112908682870161117e565b93505060206112a18682870161117e565b92505060406112b2868287016111b4565b9150509250925092565b600060ff82169050919050565b6112d2816112bc565b82525050565b60006020820190506112ed60008301846112c9565b92915050565b6000602082840312156113095761130861112b565b5b60006113178482850161117e565b91505092915050565b611329816112bc565b811461133457600080fd5b50565b60008135905061134681611320565b92915050565b6000602082840312156113625761136161112b565b5b600061137084828501611337565b91505092915050565b61138281611155565b82525050565b600060208201905061139d6000830184611379565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6113e5826110b5565b810181811067ffffffffffffffff82111715611404576114036113ad565b5b80604052505050565b6000611417611121565b905061142382826113dc565b919050565b600067ffffffffffffffff821115611443576114426113ad565b5b61144c826110b5565b9050602081019050919050565b82818337600083830152505050565b600061147b61147684611428565b61140d565b905082815260208101848484011115611497576114966113a8565b5b6114a2848285611459565b509392505050565b600082601f8301126114bf576114be6113a3565b5b81356114cf848260208601611468565b91505092915050565b6000602082840312156114ee576114ed61112b565b5b600082013567ffffffffffffffff81111561150c5761150b611130565b5b611518848285016114aa565b91505092915050565b600080604083850312156115385761153761112b565b5b60006115468582860161117e565b92505060206115578582860161117e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806115a857607f821691505b6020821081036115bb576115ba611561565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115fb82611193565b915061160683611193565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561163b5761163a6115c1565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061167c602083611071565b915061168782611646565b602082019050919050565b600060208201905081810360008301526116ab8161166f565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061170e602583611071565b9150611719826116b2565b604082019050919050565b6000602082019050818103600083015261173d81611701565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006117a0602683611071565b91506117ab82611744565b604082019050919050565b600060208201905081810360008301526117cf81611793565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611832602483611071565b915061183d826117d6565b604082019050919050565b6000602082019050818103600083015261186181611825565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006118c4602283611071565b91506118cf82611868565b604082019050919050565b600060208201905081810360008301526118f3816118b7565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611930601d83611071565b915061193b826118fa565b602082019050919050565b6000602082019050818103600083015261195f81611923565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006119c2602583611071565b91506119cd82611966565b604082019050919050565b600060208201905081810360008301526119f1816119b5565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611a54602383611071565b9150611a5f826119f8565b604082019050919050565b60006020820190508181036000830152611a8381611a47565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611ae6602683611071565b9150611af182611a8a565b604082019050919050565b60006020820190508181036000830152611b1581611ad9565b905091905056fea26469706673582212201a91279b2295bb00f93cd807f170222bec959f12e0f8a9eb2b8e558dffd174e264736f6c634300080d0033";

export class Danii__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    _totalSupply: BigNumberish,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Danii> {
    return super.deploy(
      name_,
      symbol_,
      _totalSupply,
      decimals_,
      overrides || {}
    ) as Promise<Danii>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    _totalSupply: BigNumberish,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      _totalSupply,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): Danii {
    return super.attach(address) as Danii;
  }
  connect(signer: Signer): Danii__factory {
    return super.connect(signer) as Danii__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DaniiInterface {
    return new utils.Interface(_abi) as DaniiInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Danii {
    return new Contract(address, _abi, signerOrProvider) as Danii;
  }
}
