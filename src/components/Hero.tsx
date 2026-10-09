import Image from "next/image";
import TodayDate from "@/components/TodayDate";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-green-50 px-6 py-10 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-green-600">
            প্রতিদিনের বাজারদর
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <div className="mt-3 text-sm font-medium text-green-700">
            <TodayDate />
          </div>

          <p className="mt-4 max-w-lg text-gray-600">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#সব-পণ্য"
            className="btn mt-6 bg-green-600 text-white hover:bg-green-700"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="বাজার দর"
            width={450}
            height={350}
            priority
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}