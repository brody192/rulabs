import LottieControl from "../components/lottie";

function DevCard () {
  return (
    <div>
      <h1>DevNet Directory</h1>
      <p>Welcome to the DevNet Directory, a place to find and connect with other developers in the Solana ecosystem.</p>
      <LottieControl />
    </div>
  )
}

export function Home() {
  return (
    <div>
      <DevCard />
    </div>
  );
}
