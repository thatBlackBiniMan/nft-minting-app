import { useState } from "react";
import {ethers, BigNumber } from 'ethers';
//import guePunksNFT from './GuePunksNFT.json';

const guePunksNFTAddress = ""; // contract address

const MainMint = ({accounts, setAccounts}) => {
  const [minAmount, setMintAmoumt] = useState(1);
  const isConnected = Boolean(accounts[0]);

async function handleMint (){
  if (window.ethereum){
    const provider = new ethers.provider.Web3provider(window.ethereum);
    const signer = provider.getSigner();
    const contract =new ethers.Contract(
      guePunksNFTAddress,
      guePunksNFT.abi,
      signer
    );
  try {
   const response = await contract.mint(BigNumber.from (minAmount));
   console.log('response');
  } catch(err){
    console.log("error", err)
  }

  }
}

const handleDecrement = ()=>{
  if (minAmount <= 1) return;
  setMintAmoumt(minAmount - 1);
};


const handleIncrement = ()=>{
  if (minAmount >= 3) return;
  setMintAmoumt(minAmount + 1);
};

return(
  <div>
    <h1>GuePunks</h1>
    <p></p>
  </div>
)


}