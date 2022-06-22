
import React, { useState } from 'react'
import { useWeb3Transfer } from 'react-moralis';


const TransferERC721 = () => {
  // contract address = 0x9d941701a603C5e62558bCb1d04676ea225171d3
  const [userAddress, setUserAddress] = useState("0");
  const [contractAddress, setContractAddress] = useState("0");
  const [tokenId, setTokenId] = useState("0");

  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "erc721",
    receiver: userAddress,
    contractAddress: contractAddress,
    tokenId: tokenId,
  });
  console.log("error", error);
  return (
    <div>
      <input
        placeholder="user address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <input
        placeholder="token id"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />

      <input
        placeholder="contract ddress"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
      />
      <button onClick={() => fetch()} disabled={isFetching}>
        Transfer ERC721
      </button>
    </div>
  );
}

export default TransferERC721