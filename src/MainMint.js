import { useState } from "react";
import {ethers, BigNumber } from 'ethers';
//import guePunksNFT from './GuePunksNFT.json';

const guePunksNFTAddress = ""; // contract address

const MainMint = ({accounts, setAccounts}) => {
  const [mintAmount, setMintAmoumt] = useState(1);
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
   const response = await contract.mint(BigNumber.from (mintAmount));
   console.log('response');
  } catch(err){
    console.log("error", err)
  }

  }
}

const handleDecrement = ()=>{
  if (mintAmount <= 1) return;
  setMintAmoumt(mintAmount - 1);
};


const handleIncrement = ()=>{
  if (mintAmount >= 3) return;
  setMintAmoumt(mintAmount + 1);
};

return(
  <div>
    <h1>GuePunks</h1>
    <p>Welcome to Tomorrow, I already exist tomorrow, come explore</p>
    {isConnected ? (
      <div>
        <div>
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={mintAmount}/>
        <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleMint}>Mint Now</button>
        </div>
    ): (
      <p>Must Connect Wallet to Mint.</p>
    )}
  </div>
);


};

export default MainMint;