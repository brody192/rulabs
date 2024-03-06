import './styles.css';
import '@solana/wallet-adapter-react-ui/styles.css';

import * as ReactDOM from "react-dom";

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Providers
function Root() {
  return (
    <App />
  )
}

// Content
function App() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <div>
            <img src="/ru.gif" className="w-screen" alt="" />
            <h1 className="text-center text-3xl text-white opacity-80">~/rulabs</h1>
        </div>
      </main>
    </>
  )
}

root.render(<Root />);