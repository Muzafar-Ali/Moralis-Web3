import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";
import TransferEth from './components/TransferEth';
import TransferERC20 from './components/TransferERC20';
import { useEffect } from 'react';
import TransferERC721 from './components/TransferERC721';
import { UserNfts } from './components/useNfts';

function App() {

  const { authenticate, isAuthenticated, isAuthenticating, Moralis, user, account, logout } = useMoralis();

  const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" }).then(function (user) {
            console.log("logged in user:", user);
            // console.log(user!.get("ethAddress"));
          }).catch(function (error) {
            console.log(error);
          });
      }
      Moralis.enableWeb3();
    }

    const logOut = async () =>{
      await logout();
      console.log("logged Out")
    }

    console.log("account", account);
    useEffect(() =>{

    },[account])

  return (
    <div className="App">
      Hello World <br />
      <button onClick={() => login()} disabled={account && true}> Moralis Login </button> <br/>
      <button onClick={() => logOut()} disabled={!account && true}> logout </button>
      {
        account &&
        <div>
          <div>
            <h2>Transfer Eth</h2>
            <TransferEth Moralis={Moralis}/>
          </div><br/>
          <div>
            <h2>Transfer ERC20 </h2>
            <TransferERC20 Moralis={Moralis}/>
          </div>
          <div>
            <h2>Transfer ERC721</h2>
            <TransferERC721 />          
          </div>
          <div><br/>
            <h2>Get User's NFTs</h2>
            <button onClick={() => UserNfts(Moralis, account)}> User Nfts</button>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
