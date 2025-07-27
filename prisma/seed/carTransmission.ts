import prisma from "@/lib/prisma";

// Function to generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim() // Remove whitespace
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

export const carTransmissions = [
  {
    name: "Manual",
    nameAr: "يدوي",
    slug: generateSlug("Manual"),
  },
  {
    name: "Automatic",
    nameAr: "أوتوماتيكي",
    slug: generateSlug("Automatic"),
  },
  {
    name: "CVT",
    nameAr: "سي في تي",
    slug: generateSlug("CVT"),
  },
  {
    name: "Semi-Automatic",
    nameAr: "شبه أوتوماتيكي",
    slug: generateSlug("Semi-Automatic"),
  },
  {
    name: "Dual-Clutch",
    nameAr: "ديوال كلتش",
    slug: generateSlug("Dual-Clutch"),
  },
  {
    name: "Tiptronic",
    nameAr: "تيبترونيك",
    slug: generateSlug("Tiptronic"),
  },
  {
    name: "Manual Sequential",
    nameAr: "يدوي متتالي",
    slug: generateSlug("Manual Sequential"),
  },
  {
    name: "AMT",
    nameAr: "اي ام تي",
    slug: generateSlug("AMT"),
  },
];

export async function seedCarTransmissions() {
  console.log("Seeding car transmissions...");

  await prisma.carTransmission.deleteMany();
  const result = await prisma.carTransmission.createMany({
    data: carTransmissions,
    skipDuplicates: true,
  });

  console.log(
    `Seeded ${result.count} new car transmissions (${carTransmissions.length} total in data)`
  );
}
