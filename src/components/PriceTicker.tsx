const products = [
  { emoji: "🍚", name: "চাল", price: "৭৫", unit: "কেজি", change: "+২.৫%" },
  { emoji: "🫘", name: "ডাল", price: "১২০", unit: "কেজি", change: "-১.৮%" },
  { emoji: "🛢️", name: "সয়াবিন তেল", price: "১৮০", unit: "লিটার", change: "+৩.২%" },
  { emoji: "🥔", name: "আলু", price: "৪৫", unit: "কেজি", change: "-২.১%" },
  { emoji: "🐟", name: "রুই মাছ", price: "৩৫০", unit: "কেজি", change: "+১.৫%" },
];

export default function PriceTicker() {
  const tickerProducts = [...products, ...products];

  return (
    <div className="overflow-hidden border-y bg-green-50 py-2">
      <div
        className="flex w-max gap-8 whitespace-nowrap"
        style={{
          animation: "ticker 20s linear infinite",
        }}
      >
        {tickerProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm"
          >
            <span>{product.emoji}</span>

            <span className="font-medium">
              {product.name}
            </span>

            <span>
              {product.price} টাকা/{product.unit}
            </span>

            <span
              className={
                product.change.startsWith("+")
                  ? "font-semibold text-green-600"
                  : "font-semibold text-red-500"
              }
            >
              {product.change.startsWith("+") ? "▲" : "▼"}{" "}
              {product.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}