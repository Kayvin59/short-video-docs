import WalletWrapper from '../components/WalletWrapper';

export default function Page() {
  return (
    <div className="flex h-full w-96 max-w-full flex-col p-4 md:w-[1008px]">
      <section className="templateSection flex w-full flex-col flex-grow items-center justify-center gap-4 rounded-xl bg-gray-100">
        <div className="flex items-center gap-3">
          <WalletWrapper />
        </div>
      </section>
    </div>
  );
}
