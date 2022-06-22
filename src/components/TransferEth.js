
import React, { useState } from 'react'
import { useWeb3Transfer } from 'react-moralis';


const TransferEth = ({Moralis}) => {
  const [userAddress, setUserAddress] = useState("0");
  const [userAmount, setUserAmount] = useState("0");
  
 const { fetch, error, isFetching } = useWeb3Transfer({
   type: "native",
   amount: Moralis.Units.ETH(userAmount),
   receiver: userAddress,
 });
 
 return (
   <div>
      Amount : <input value={userAmount} onChange={(e) => setUserAmount(e.target.value)} placeholder="Amount"/>
      Address : <input value={userAddress} onChange={(e) => setUserAddress(e.target.value)} placeholder="Address"/>
      <button onClick={() => fetch()} disabled={isFetching}> Transfer Eth</button>
    </div>
  )
}

export default TransferEth