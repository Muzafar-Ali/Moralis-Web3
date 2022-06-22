import React, { useState } from 'react'
import { useWeb3Transfer } from 'react-moralis';



const TransferERC20 = ({Moralis}) => {
// contract address =  "0x9214160A84163C8FBB525AE7d51c86ecE5E13D0a";

    const [userAddress, setUserAddress] = useState("0");
    const [contractAddress, setContractAddress] = useState("0");
    const [userAmount, setUserAmount] = useState('0');
 
    const { fetch, error, isFetching } = useWeb3Transfer({
        type: "erc20",
        receiver: userAddress,
        amount: Moralis.Units.Token(userAmount, 18),
        contractAddress: contractAddress,
   });
  
  return (
    <div>
      User Address:<input value={userAddress} onChange={(e) => setUserAddress(e.target.value)} placeholder="User Address" />
      Amount:<input value={userAmount} onChange={(e) => setUserAmount(e.target.value)} placeholder="Amount" />
      Contract Address:<input value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder=" Contract Address" />
      <button onClick={() => fetch()}>Transfer ERC20</button>
    </div>
  );
}

export default TransferERC20