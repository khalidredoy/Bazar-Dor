import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PriceTicker />

      <h1 className="text-center pt-10 text-3xl font-bold">
        বাজার দর
      </h1>
    </main>
  );
}