"use client";

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck } from "lucide-react";

// 1. Move the code containing useSearchParams into its own component
function LoginFormInner() {
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get("from") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
    } else {
      router.push(from);
      router.refresh();
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 mx-auto mb-6">
        <ShieldCheck className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-white text-center mb-2">
        Admin Login
      </h1>
      <p className="text-slate-400 text-sm text-center mb-8">
        Sign in to manage your site
      </p>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className={inputCls}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className={inputCls}
        />
      </div>

      {error && (
        <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 disabled:opacity-60 transition flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </motion.form>
  );
}

// 2. Export the parent wrapper with Suspense
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <Suspense fallback={
        <div className="text-center text-slate-400 flex flex-col items-center gap-2">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          <p>Loading login portal...</p>
        </div>
      }>
        <LoginFormInner />
      </Suspense>
    </div>
  );
}
