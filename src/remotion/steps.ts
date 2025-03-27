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
      title: "Basic Connect",
      code: `
      <ConnectWallet>
        <Name />
      </ConnectWallet>`,
      duration: 450,
      props: {},
    },
    {
      title: "Sign Up",
      code: `
      <ConnectWallet text="Sign up">
        <Name />
      </ConnectWallet>`,
      duration: 450,
      props: { text: "Sign up" }
    },
    {
      title: "Styled Login",
      code: `
      <ConnectWallet 
        className="bg-blue-base text-white px-4 py-2 rounded-lg"
        text="Log in"
      >
        <Name />
      </ConnectWallet>`,
      duration: 450,
      props: {
        text: "Log in",
        className: "bg-blue-base text-white px-4 py-2 rounded-lg"
      }
    },
    {
      title: "With Handler",
      code: `
      <ConnectWallet onConnect={() => alert('Connected!')}>
        <Name />
      </ConnectWallet>`,
      duration: 450,
      props: { onConnect: () => console.log('Connected!') }
    }
  ];