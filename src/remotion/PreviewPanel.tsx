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
          className="bg-blue-base text-white px-4 py-2 rounded-lg"
        />
      );
    case 3:
      return (
        <WalletWrapper
          text="Log in"
          className="bg-blue-base text-white px-4 py-2 rounded-lg"
          onConnect={() => alert('Wallet connected!')}
        />
      );
    default:
      return null;
  }
}
