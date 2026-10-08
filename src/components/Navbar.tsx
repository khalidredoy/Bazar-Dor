const categories = [
  { name: "চাল", slug: "chal" },
  { name: "ডাল", slug: "dal" },
  { name: "তেল", slug: "tel" },
  { name: "সবজি", slug: "sobji" },
  { name: "মাছ", slug: "mach" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-base-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="navbar px-0">
          <div className="flex-1">
            <div>
              <div className="text-xl font-bold text-success">🛒 বাজার দর</div>

              <div className="text-xs text-base-content/60">আজকের বাজারদর</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-ghost btn-sm">সাইন ইন</button>

            <button className="btn btn-success btn-sm text-white">
              সাইন আপ
            </button>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category.slug}
              className={`btn btn-sm whitespace-nowrap ${
                category.slug === "chal"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "btn-ghost"
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
