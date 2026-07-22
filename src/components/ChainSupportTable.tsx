import { Search, Check as CheckIcon, X as XIcon } from "lucide-react";

const chains = [
  {
    name: "BNB Smart Chain (BNB)",
    logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",
    buy: true, sell: true, swap: true, earn: true, dapps: true,
  },
  {
    name: "Solana (SOL)",
    logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png",
    buy: true, sell: true, swap: true, earn: true, dapps: false,
  },
  {
    name: "Sui (SUI)",
    logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/sui/info/logo.png",
    buy: true, sell: true, swap: false, earn: true, dapps: false,
  },
  {
    name: "Ethereum (ETH)",
    logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
    buy: true, sell: true, swap: true, earn: true, dapps: true,
  },
];

function Check({ ok }: { ok: boolean }) {
  const base = "inline-flex h-6 w-6 items-center justify-center rounded-full";
  const colorClass = ok ? "bg-blue-600 text-white" : "border-2 border-gray-300 text-gray-300";
  return (
    <span className={base + " " + colorClass}>
      {ok ? <CheckIcon size={14} strokeWidth={3} /> : <XIcon size={14} strokeWidth={3} />}
    </span>
  );
}

export default function ChainSupportTable() {
  return (
    <section className="bg-white py-8 px-4 md:px-8">
  <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 py-16">
      <div className="px-6 mx-auto max-w-5xl text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          One Platform, Millions of Assets
        </h1>
        <p className="mt-4 text-white/80">
          As a leading self-custody multi-chain platform, we support millions of
          assets across 100+ blockchains.
        </p>

        <div className="relative mt-8 mx-auto w-full max-w-xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
  placeholder="Search a chain..."
  className="w-full rounded-full bg-white py-3 pl-12 pr-6 text-gray-800 outline-none shadow-sm"
/>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white text-left text-gray-800">
          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Chain</th>
                <th className="px-4 py-4 font-medium">Buy</th>
                <th className="px-4 py-4 font-medium">Sell</th>
                <th className="px-4 py-4 font-medium">Swap</th>
                <th className="px-4 py-4 font-medium">Earn</th>
                <th className="px-4 py-4 font-medium">dApps</th>
              </tr>
            </thead>
            <tbody>
              {chains.map((c) => (
                <tr key={c.name} className="border-t border-gray-100">
                  <td className="flex items-center gap-3 px-6 py-4 font-medium">
                    <img src={c.logo} alt={c.name} width={28} height={28} className="rounded-full" />
                    {c.name}
                  </td>
                  <td className="px-4 py-4"><Check ok={c.buy} /></td>
                  <td className="px-4 py-4"><Check ok={c.sell} /></td>
                  <td className="px-4 py-4"><Check ok={c.swap} /></td>
                  <td className="px-4 py-4"><Check ok={c.earn} /></td>
                  <td className="px-4 py-4"><Check ok={c.dapps} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 text-2xl font-bold">
          <div>10M+ Assets</div>
          <div>600M+ NFTs</div>
          <div>100+ Blockchains</div>
        </div>
      </div>
    </div>
  </section>
  );
}