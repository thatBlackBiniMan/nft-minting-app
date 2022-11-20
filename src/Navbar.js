import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook.png";
import Twitter from "./assets/social-media-icons/twitter.png";
import Discord from "./assets/social-media-icons/Discord.png";
 

 const Navbar = ({accounts, setAccounts}) => {
 const isConnected = Boolean(accounts[0]);
 
 
async function connectAccount(){
  if (window.ethereum){
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccounts(accounts);
  }
}
return (
  <Flex justify="space-between" align="center" padding="30px">

 <div>
    {/*Socialmedia */}
   
<Flex justify="space-around" width="40%" padding="0 75px">
 <Link href="https://www.facebook.com">
  <Image src={Facebook} boxSize="42px" margin="0 15px"/>
 </Link>
</Flex> 
    

<Flex justify="space-around" width="40%" padding="0 75px">
 <Link href="https://www.twitter.com">
  <Image src={Twitter} boxSize="42px" margin="0 15px"/>
 </Link>
</Flex> 



<Flex justify="space-around" width="40%" padding="0 75px">
 <Link href="https://www.discord.com">
  <Image src={Discord} boxSize="42px" margin="0 15px"/>
 </Link>
</Flex> 

    {/*Rightside */}
 <Flex justify="space-around" align="center" width="40%" padding="30px">

<Box margin="0 15px">About</Box>
<Box margin="0 15px">Mint</Box>
<Box margin="0 15px">Team</Box>

 

   {/*connect wallet */}
   {isConnected ? (
   <Box margin="0 15px">Connected</Box> ) : 
   (<Button
    backgroundColor="#06517D"
    borderRadius="5px"
    boxShadow="0px 2px 1px #0F0F0F"
    color="white"
    cursor="pointer"
    fontFamily="inherit"
    padding="15px"
    margin="0 15px"
    onClick={connectAccount}>connect</Button>
   )}
  

 </Flex>
 
  </div> 

  </Flex>

)
}
 
export default Navbar;