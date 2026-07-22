import { Star } from "lucide-react";

const ITEMS = [
  { label: "Trusted by", value: "200M people" },
  { label: "Founded in", value: "2017" },
  { label: "Independently", value: "Audited" },
  { label: "ISO", value: "Certified" },
];

export function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {ITEMS.map((it) => (
          <div key={it.label}>
            <div className="font-extrabold text-lg">{it.label}</div>
            <div className="text-muted-foreground">{it.value}</div>
          </div>
        ))}
        <div>
          <div className="font-extrabold text-lg">Top reviews</div>
          <div className="flex justify-center gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand text-brand" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}