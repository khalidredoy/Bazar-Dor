export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-green-50 px-6 py-10 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-green-600">
            প্রতিদিনের বাজারদর
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            আজকের বাজারদর
            <br />
            এক নজরে
          </h1>

          <p className="mt-4 max-w-lg text-gray-600">
            আপনার প্রয়োজনীয় পণ্যের বর্তমান বাজারদর সহজেই দেখে নিন।
          </p>

          <a
            href="#সব-পণ্য"
            className="btn mt-6 bg-green-600 text-white hover:bg-green-700"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="text-8xl sm:text-9xl">🛒</div>
        </div>
      </div>
    </section>
  );
}
