import { auth } from "@/lib/auth";

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defense-in-depth — middleware already enforces auth
  // This layout intentionally has no UI; groups render their own
  return <>{children}</>;
}