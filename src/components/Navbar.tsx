"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import TodayDate from "@/components/TodayDate";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

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
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("Sign out করা যায়নি");
      console.error(error);
      return;
    }

    toast.success("Sign out সফল হয়েছে");
    router.push("/signin");
    router.refresh();
  };

  return (
    <header className="border-b border-base-200 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="navbar min-h-20 px-0">
          {/* Logo and Date */}
          <div className="flex-1">
            <Link href="/" className="block">
              <div className="text-xl font-bold text-success">
                🛒 বাজার দর
              </div>
              <TodayDate />
            </Link>
          </div>

          {/* Authentication */}
          <div className="flex items-center">
            {isPending ? (
              <span className="loading loading-spinner loading-sm text-success" />
            ) : session ? (
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={handleSignOut}
                  className="btn btn-error btn-sm text-white shadow-sm"
                >
                  সাইন আউট
                </button>

                {/* User Name */}
               <div className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5">
  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-semibold text-white">
    {(session.user.name || "K")
      .charAt(0)
      .toUpperCase()}
  </div>

  <span className="text-[10px] font-medium text-emerald-800">
    {session.user.name || "Khalid"}
  </span>
</div>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/signin"
                  className="btn btn-ghost btn-sm"
                >
                  সাইন ইন
                </Link>

                <Link
                  href="/signup"
                  className="btn btn-success btn-sm text-white"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Category Navigation */}
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