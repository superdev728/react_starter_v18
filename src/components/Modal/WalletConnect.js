import React, { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import walletConnectImg from "../../assets/img/wallet_connect.svg";

const WalletConnect = () => {
  const [collapseStatus, setCollapseStatus] = useState(true);
  const {
    connect,
    wallets,
  } = useWallet();

  const connectWallet = (info) => {
    localStorage.setItem("selectedWalletName", info.name);
    localStorage.setItem("selectedWalletIcon", info.icon);
    connect(info.name);
  }

  return (
    <div
      className="modal fade"
      id="walletConnectModal"
      tabIndex="-1"
      aria-labelledby="walletConnectModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-main wallet-connect-modal bg-modal">
          <div className="modal-header border-none">
            <h5 className="modal-title font-modal mx-auto">Connect a Wallet</h5>
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
            <div className="d-flex flex-center">
              <img src={walletConnectImg} alt="Wallet Connect BG" />
            </div>
            <div className="font-modal content-field text-center">
              To continue working with the site, you need to connect a wallet
              and allow the site access to your account
            </div>
            <div>
              <div
                className="wallet-card bg-primary cursor-pointer d-flex"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => connectWallet(wallets[0])}
              >
                <div>
                  <img
                    src={wallets && wallets[0]?.icon}
                    alt="Wallet Logo"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="font-light my-auto wallet-card-name">
                  {wallets && wallets[0]?.name}&nbsp;Wallet
                </div>
              </div>
              <div
                className="wallet-card bg-primary cursor-pointer d-flex"
                onClick={() => setCollapseStatus(!collapseStatus)}
              >
                <div className="wallets-collapse bg-second d-flex">
                  <div className="mx-auto my-auto">
                    {collapseStatus ? (
                      <i className="bi bi-chevron-down font-light"></i>
                    ) : (
                      <i className="bi bi-chevron-up font-light"></i>
                    )}
                  </div>
                </div>
                <div className="font-light my-auto wallet-card-name">
                  Other Wallets
                </div>
              </div>
              {!collapseStatus ? (
                <div>
                  {wallets?.map((wal, index) => {
                    if (index > 0) {
                      return (
                        <div
                          className="wallet-card bg-primary cursor-pointer d-flex"
                          key={index}
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={() => connectWallet(wal)}
                        >
                          <div>
                            <img src={wal.icon} alt="Wallet Logo" width="40px" height="40px" />
                          </div>
                          <div className="font-light my-auto wallet-card-name">
                            {wal.name}&nbsp;Wallet
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
