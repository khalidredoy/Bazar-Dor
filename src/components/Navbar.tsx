import Link from "next/link";

const categories = [
  { name: "চাল", slug: "chal" },
  { name: "ডাল", slug: "dal" },
  { name: "তেল", slug: "tel" },
  { name: "সবজি", slug: "sobji" },
  { name: "মাছ", slug: "mach" },
  { name: "মাংস", slug: "mangsho" },
  { name: "ডিম-দুধ", slug: "dim-dui" },
  { name: "মসলা", slug: "mosla" },
];

export default function Navbar() {
return ( <header className="border-b bg-white"> <div className="mx-auto max-w-6xl px-4"> <div className="navbar px-0"> <div className="flex-1"> <Link href="/" className="block"> <div className="text-xl font-bold text-success">
🛒 বাজার দর </div> <div className="text-xs text-base-content/60">
আজকের বাজারদর </div> </Link> </div>

      <div className="flex gap-2">
        <Link href="/signin" className="btn btn-ghost btn-sm">
          সাইন ইন
        </Link>
        <Link href="/signup" className="btn btn-success btn-sm text-white">
          সাইন আপ
        </Link>
      </div>
    </div>

    <nav className="flex gap-2 overflow-x-auto pb-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
          className="btn btn-ghost btn-sm whitespace-nowrap"
        >
          {category.name}
        </Link>
      ))}
    </nav>
  </div>
</header>

);
}
