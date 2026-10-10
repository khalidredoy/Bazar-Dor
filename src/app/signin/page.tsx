"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Login failed");
        console.error(error);
        return;
      }

      if (data) {
        toast.success("Login successful!");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6">
          <legend className="fieldset-legend text-xl">
            Sign In
          </legend>

          <p className="text-sm text-base-content/70 mb-3">
            Welcome back! Login to your BazarDor account.
          </p>

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Enter your email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className="btn btn-neutral mt-4 w-full"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="link link-primary">
              Sign Up
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
}