import {Link} from 'react-router-dom';

function Connect() {
  return (
    <div className="connect-container">
      <div className="connect-image-container">
        <img src='https://rarible.com/static/3bd3dce3665cb2869ec24c0c38a8e086.jpg' alt="no img" />
      </div>
      <div className="connect-wallet-container">
        <div className="connect-wallet-box">
        <div className="connect-wallet-button-container">
          <button className="connect-button">
            <svg viewBox="0 0 14 12" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29436 0.292893C6.68488 -0.0976311 7.31805 -0.0976311 7.70857 0.292893C8.0991 0.683417 8.0991 1.31658 7.70857 1.70711L4.41568 5H12.9985C13.5508 5 13.9985 5.44772 13.9985 6C13.9985 6.55228 13.5508 7 12.9985 7H4.41568L7.70857 10.2929C8.0991 10.6834 8.0991 11.3166 7.70857 11.7071C7.31805 12.0976 6.68488 12.0976 6.29436 11.7071L0.587252 6L6.29436 0.292893Z" fill="currentColor"></path></svg>
            <Link to='/'>Go back</Link>
          </button>
        </div>
        <div className="connect-add-wallet-buttons-box">
          <div className="connect-your-wallet-container">
            <span className="connect-your-wallet-text">Connect your wallet</span>
            <div className="connect-your-wallet-desc-container">
              <span className="connect-your-wallet-desc-text">Connect with one of available wallet providers or create a new wallet
              <button className="what-is-wallet-button">What is wallet?</button></span>
            </div>
          </div>
          <div className="connect-wallet-buttons-container">
            <div className="connect-wallet-buttons-box">
              <div className="add-wallet-button"><img alt="Fortmatic" src="https://rarible.com/static/e7fbb606805f82bd7a35aba13f77dbce.svg" /><div className="add-wallet-button-text-container"><span className="add-wallet-button-text">Fortmatic</span></div></div>
              <div className="add-wallet-button"><img alt="WalletConnect" src="https://rarible.com/static/33e41e4b40136207f4a535b5850d1faa.svg" /><div className="add-wallet-button-text-container"><span className="add-wallet-button-text">WalletConnect</span></div></div>
              <div className="add-wallet-button"><img alt="Coinbase Wallet" src="https://rarible.com/static/5b5a2db80207ba34ca3ce271d20af421.svg" /><div className="add-wallet-button-text-container"><span className="add-wallet-button-text">Coinbase Wallet</span></div></div>
              <div className="add-wallet-button"><img alt="MyEtherWallet" src="https://rarible.com/static/e6acd346113bb2a37dd71732eacd34ed.svg" /><div className="add-wallet-button-text-container"><span className="add-wallet-button-text">MyEtherWallet</span></div></div>
              <div className="add-wallet-button"><img alt="Torus" src="https://rarible.com/static/81cb7a45a085a8b5a19791dfb05468fa.svg" /><div className="add-wallet-button-text-container"><span className="add-wallet-button-text">Torus</span></div></div></div>
          </div>
          <div className="connect-wallet-bottum-desc-box">
            <span className="connect-wallet-bottum-desc-text">We do not own your private keys and cannot access your funds without your confirmation.</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
