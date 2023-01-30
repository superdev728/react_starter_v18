import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Logo from "../../assets/img/aptos.png";
import notificationConfig from "../../services/notificationConfig";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const WalletView = () => {
  const [copied, setCopied] = useState(false);
  const {
    account,
    disconnect,
  } = useWallet();

  useEffect(() => {
    if (copied) {
      notificationConfig.success("Wallet Address Copied!");
      setCopied(false);
    }
  }, [copied]);

  const walletDisconnect = () => {
    localStorage.setItem("selectedWalletName", undefined);
    localStorage.setItem("selectedWalletIcon", undefined);
    disconnect();
  }

  return (
    <div
      className="modal fade"
      id="walletViewModal"
      tabIndex="-1"
      aria-labelledby="walletViewModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-main wallet-connect-modal bg-modal">
          <div className="modal-header border-none">
            <h5 className="modal-title font-modal mx-auto">Connected Wallet</h5>
            <button
              type="button"
              className="font-light bg-transparent border-none"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="bi bi-x-lg font-modal"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="wallet-info-field">
              <div className="d-flex wallet-info-card card-border-bottom">
                <div className="my-auto">
                  <img
                    src={localStorage.getItem("selectedWalletIcon")}
                    alt="Wallet Logo"
                    className="wallet-info-card-icon"
                    width="40px"
                  />
                </div>
                <div>
                  <div className="font-modal wallet-info-card-title">
                    Wallet Name
                  </div>
                  <div className="font-light wallet-info-card-content">
                    {localStorage.getItem("selectedWalletName")}
                  </div>
                </div>
              </div>
              <div className="d-flex wallet-info-card">
                <div className="my-auto">
                  <img
                    src={Logo} 
                    alt="Aptos Logo"
                    className="token-logo wallet-info-card-icon"
                    width="40px"
                  />
                </div>
                <div>
                  <div className="font-modal wallet-info-card-title">
                    Account Address
                  </div>
                  <div className="font-light wallet-info-card-content">
                    {account?.address.substring(0, 5)}...
                    {account?.address.substring(
                      account?.address.length - 4,
                      account?.address.length
                    )}
                  </div>
                </div>
                <CopyToClipboard
                  text={account?.address}
                  onCopy={() => setCopied(true)}
                >
                  <button className="border-none bg-transparent ml-auto">
                    <i className="bi bi-files font-clipboard"></i>
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div>
              <button
                className="wallet-disconncet-btn font-light"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={walletDisconnect}
              >
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletView;
