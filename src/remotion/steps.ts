export interface TutorialStep {
  title: string;
  code: string;
  duration: number;
  props: {
    text?: string;
    className?: string;
    onConnect?: () => void;
  };
}

export const STEPS: TutorialStep[] = [
  {
    title: 'Wallet default',
    code: `
      export default function WalletWrapper() {
        return (
          <>
            <Wallet />
          </>
        );
      }`,
    duration: 300,
    props: {},
  },
  {
    title: 'Wallet Connect',
    code: `
      export default function WalletWrapper() {
        return (
          <>
            <Wallet>
              <ConnectWallet />
            </Wallet>
          </>
        );
      }`,
    duration: 300,
    props: {},
  },
  {
    title: 'Wallet Identity',
    code: `
      export default function WalletWrapper() {
        return (
          <>
            <Wallet>
              <ConnectWallet >
                <Name />
              </ConnectWallet>
            </Wallet>
          </>
        );
      }`,
    duration: 300,
    props: {},
  },
  {
    title: 'Wallet Custom text',
    code: `
      export default function WalletWrapper() {
        return (
          <>
            <Wallet>
              <ConnectWallet >
                <ConnectWalletText>login<ConnectWalletText/>
              </ConnectWallet>
            </Wallet>
          </>
        );
      }`,
    duration: 300,
    props: {},
  },
  {
    title: 'Wallet Custom style',
    code: `
      export default function WalletWrapper() {
        return (
          <>
            <Wallet>
              <ConnectWallet 
                className="bg-blue-base text-white px-4 py-2 rounded-lg"
              >
                <ConnectWalletText>login<ConnectWalletText/>
              </ConnectWallet>
            </Wallet>
          </>
        );
      }`,
    duration: 300,
    props: {},
  },
  {
    title: 'Wallet Callback',
    code: `
      export default function WalletWrapper() {
        return (
          <>
            <Wallet>
              <ConnectWallet 
                className="bg-blue-base text-white px-4 py-2 rounded-lg"
                onConnect={() => alert('Connected!')}
              >
                <ConnectWalletText>login<ConnectWalletText/>
              </ConnectWallet>
            </Wallet>
          </>
        );
      }`,
    duration: 300,
    props: {},
  },
];
