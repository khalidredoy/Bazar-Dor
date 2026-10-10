"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("আপনার নাম লিখুন");
      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        toast.error(error.message || "নাম পরিবর্তন করা যায়নি");
        return;
      }

      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <span className="loading loading-spinner loading-md text-success" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-xl font-bold">লগইন করুন</h1>
        <p className="mt-2 text-sm text-base-content/70">
          প্রোফাইল পরিবর্তন করতে প্রথমে লগইন করতে হবে।
        </p>

        <button
          onClick={() => router.push("/signin")}
          className="btn btn-success mt-5 text-white"
        >
          সাইন ইন
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-[60vh] px-4 py-10">
      <div className="mx-auto max-w-md rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm sm:p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700">
            {(session.user.name || "U").charAt(0).toUpperCase()}
          </div>

          <h1 className="mt-4 text-2xl font-bold">
            প্রোফাইল আপডেট
          </h1>

          <p className="mt-2 text-sm text-base-content/60">
            আপনার অ্যাকাউন্টের নাম পরিবর্তন করুন।
          </p>
        </div>

        <div className="mb-5 rounded-lg bg-base-200/60 p-3">
          <p className="text-xs text-base-content/60">
            ইমেইল
          </p>
          <p className="mt-1 break-all text-sm font-medium">
            {session.user.email}
          </p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              আপনার নাম
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={session.user.name || "আপনার নাম লিখুন"}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-success w-full text-white"
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                আপডেট হচ্ছে...
              </>
            ) : (
              "নাম আপডেট করুন"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}