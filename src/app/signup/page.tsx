"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function SignUpPage() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Sign up failed");
      console.error(error);
      return;
    }

    if (data) {
      toast.success("Account created successfully!");
      console.log(data);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-6">
          <legend className="fieldset-legend text-xl">
            Sign Up
          </legend>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Your name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="btn btn-neutral mt-4 w-full"
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </div>
  );
}