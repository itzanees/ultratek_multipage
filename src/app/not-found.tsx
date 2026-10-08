import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-20">
      <div className="text-center">
        <h1 className="text-8xl font-black text-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <Link href="/" className="text-blue-400 hover:text-blue-300">Back to Home →</Link>
      </div>
    </div>
  );
}