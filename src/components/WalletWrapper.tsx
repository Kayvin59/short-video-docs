'use client';
import {
  Avatar,
  Name
} from '@coinbase/onchainkit/identity';
import {
  ConnectWallet,
  Wallet
} from '@coinbase/onchainkit/wallet';

type WalletWrapperParams = {
  text?: string;
  className?: string;
  withWalletAggregator?: boolean;
};
export default function WalletWrapper({
  text,
  withWalletAggregator = false,
}: WalletWrapperParams) {
  return (
    <>
      <Wallet>
        <ConnectWallet
          withWalletAggregator={withWalletAggregator}
          text={text}
          className="bg-blue-base text-white px-4 py-2 rounded-lg"
        >
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
      </Wallet>
    </>
  );
}
