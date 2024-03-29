import './styles/main.postcss';
import './styles/wallet-adapter.postcss';

import { StrictMode } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './routes/home';
import { Profile } from './routes/profile';
import { Nav } from './components/nav';

import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { useMemo } from 'react';

import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { BookText } from 'lucide-react';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Providers
function Root() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <StrictMode>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]}>
          <WalletModalProvider>
            <HashRouter basename="/">
              <App />
            </HashRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </StrictMode>
  );
}

// Content
function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

root.render(<Root />);
