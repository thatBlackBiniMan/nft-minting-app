import { useState } from "react";
import {ethers, BigNumber } from 'ethers';
//import guePunksNFT from './GuePunksNFT.json';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";



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
  <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
    <Box width="520px">
    <div>
    <Text fontSize="48px" textShadow="0 5px #00000">GuePunks</Text>
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
    </Box>    
  </Flex>

);


};

export default MainMint;