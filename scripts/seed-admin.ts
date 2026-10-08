import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@ultratekcs.com";
  const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("Admin already exists:", email);
    return;
  }

  const hash = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: {
      email,
      name: "Administrator",
      password: hash,
    },
  });

  console.log("✅ Admin created");
  console.log("📧 Email:   ", email);
  console.log("🔑 Password:", password);
  console.log("⚠️ Change the password after first login!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());