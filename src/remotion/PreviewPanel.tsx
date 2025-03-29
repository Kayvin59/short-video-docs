import WalletWrapper from '../components/WalletWrapper';

export function PreviewPanel({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      return <WalletWrapper />;
    case 1:
      return <WalletWrapper text="Sign up" />;
    case 2:
      return (
        <WalletWrapper
          text="Log in"
          className="rounded-lg bg-blue-base px-4 py-2 text-white"
        />
      );
    case 3:
      return (
        <WalletWrapper
          text="Log in"
          className="rounded-lg bg-blue-base px-4 py-2 text-white"
          onConnect={() => alert('Wallet connected!')}
        />
      );
    default:
      return null;
  }
}
