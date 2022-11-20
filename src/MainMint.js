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
   const response = await contract.mint(BigNumber.from (mintAmount), {
    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
   });
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
    <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="02px 2px #000000">Welcome to Tomorrow, I already exist tomorrow, come explore</Text>
    {isConnected ? (
      <div>
        <Flex align="center" justify="center">
        <Button
        backgroundColor="#D6517D"
        borderRadius="5px"
        boxShadow ="0px 2px 2px 1px #0F0F0F"
        color="white"
        cursor="pointer"
        fontFamily="inherit"
        padding="15px"
        marginTop="10px"
        onClick={handleDecrement}>-</Button>
        <Input 
        readOnly
        
        fontFamily="inherit"
        width="100px"
        height="40px"
        textAlign="center"
        paddingLeft="19px"
        marginTop="10px"
        type="number" value={mintAmount}/>
        <Button backgroundColor="#D6517D"
        borderRadius="5px"
        boxShadow ="0px 2px 2px 1px #0F0F0F"
        color="white"
        cursor="pointer"
        fontFamily="inherit"
        padding="15px"
        marginTop="10px"
        onClick={handleIncrement}>+</Button>
        </Flex>
        <Button 
        backgroundColor="#D6517D"
        borderRadius="5px"
        boxShadow ="0px 2px 2px 1px #0F0F0F"
        color="white"
        cursor="pointer"
        fontFamily="inherit"
        padding="15px"
        marginTop="10px"
        onClick={handleMint}>Mint Now</Button>
        </div>
    ): (
      <Text 
      marginTop="70px"
      fontSize="30px" 
      letterSpacing="-5.5%"
      fontFamily="VT323" 
      textShadow="02px 2px #000000"
      color="#D6517D"
      >Must Connect Wallet to Mint.</Text>
    )}
 </div>
    </Box>    
  </Flex>

);


};

export default MainMint;