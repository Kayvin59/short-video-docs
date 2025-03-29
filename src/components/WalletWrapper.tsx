'use client';
import { Name } from '@coinbase/onchainkit/identity';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';

type WalletWrapperParams = {
  text?: string;
  className?: string;
  onConnect?: () => void;
};
export default function WalletWrapper({
  className,
  text,
  onConnect = () => {},
}: WalletWrapperParams) {
  return (
    <>
      <Wallet>
        <ConnectWallet
          className={className} // Replace by this in animation className="bg-blue-base text-white px-4 py-2 rounded-lg"
          text={text} // hide text then Replace by "Sign up" or "Log in"
          onConnect={onConnect} // Replace by this in animation onConnect={() => console.log('Connected')}
        >
          <Name />
        </ConnectWallet>
      </Wallet>
    </>
  );
}
