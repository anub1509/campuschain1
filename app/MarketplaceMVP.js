"use client";
import React, { useState, useEffect } from "react";
import { PeraWalletConnect } from "@perawallet/connect";
import algosdk from "algosdk";

// Initialize outside of component to avoid recreation
const peraWallet = new PeraWalletConnect();

export default function MarketplaceMVP() {
  const [accountAddress, setAccountAddress] = useState(null);
  const [txStatus, setTxStatus] = useState("");

  useEffect(() => {
    // Reconnect to the session when the component mounts
    peraWallet.reconnectSession().then((accounts) => {
      if (accounts.length) {
        peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);
        setAccountAddress(accounts[0]);
      }
    });
  }, []);

  const handleConnectWalletClick = () => {
    peraWallet.connect().then((newAccounts) => {
      peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);
      setAccountAddress(newAccounts[0]);
    }).catch((error) => {
      if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
        console.log(error);
      }
    });
  };

  const handleDisconnectWalletClick = () => {
    peraWallet.disconnect();
    setAccountAddress(null);
  };

  const handleBuyItem = async () => {
    if (!accountAddress) return;
    setTxStatus("Initiating transaction...");

    try {
      // Connect to Algorand Testnet (using public nodes for the hackathon)
      const algodToken = "";
      const algodServer = "https://testnet-api.algonode.cloud";
      const algodClient = new algosdk.Algodv2(algodToken, algodServer, "");

      const suggestedParams = await algodClient.getTransactionParams().do();
      
      // Creating a dummy transaction: Sending 0 ALGO to yourself just to prove the wallet works
      const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: accountAddress,
        to: accountAddress, // Replace with a merchant address later
        amount: 0, // 0 ALGO for testing
        suggestedParams,
      });

      const actionTxns = [{ txn, signers: [accountAddress] }];
      
      setTxStatus("Please sign the transaction in your Pera Wallet app...");
      const signedTxns = await peraWallet.signTransaction([actionTxns]);
      
      setTxStatus("Sending transaction to network...");
      const { txId } = await algodClient.sendRawTransaction(signedTxns).do();
      
      setTxStatus(`Success! Transaction ID: ${txId}`);
    } catch (error) {
      console.error(error);
      setTxStatus("Transaction failed or was canceled.");
    }
  };

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif", backgroundColor: "#111", color: "#fff", minHeight: "100vh" }}>
      <h1>🎓 Campus Marketplace MVP</h1>
      <p>Test the Pera Wallet integration below.</p>

      {!accountAddress ? (
        <button onClick={handleConnectWalletClick} style={btnStyle}>
          Connect Pera Wallet
        </button>
      ) : (
        <div>
          <p>Connected: {accountAddress.substring(0, 8)}...</p>
          <button onClick={handleDisconnectWalletClick} style={{...btnStyle, backgroundColor: "#ff4444", marginBottom: "20px"}}>
            Disconnect
          </button>
          
          <div style={{ padding: "20px", border: "1px solid #333", borderRadius: "10px" }}>
            <h2>Used Engineering Graphics Book</h2>
            <p>Price: 0 ALGO (Testnet)</p>
            <button onClick={handleBuyItem} style={{...btnStyle, backgroundColor: "#00ff00", color: "#000"}}>
              Buy Now with ALGO
            </button>
          </div>
          <p style={{ marginTop: "20px", color: "#00ff00" }}>{txStatus}</p>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#ffe100",
  color: "#000",
  fontWeight: "bold"
};
