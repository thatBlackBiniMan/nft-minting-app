import React from "react";

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
  <div>
    {/*Socialmedia */}
  <div>Facebook</div>
  <div>Twitter</div>
  <div>Email</div>

    {/*Rightside */}
  <div>About</div>
  <div>Mint</div>
  <div>Team</div>


   {/*connect wallet */}
   {isConnected ? (<p>Connected</p> ) : 
   (<button onClick={connectAccount}>connect</button>)}
  
  
  </div> 



)
}
 
export default Navbar;