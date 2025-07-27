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

export const carFuelTypes = [
  {
    name: "Gasoline",
    nameAr: "بنزين",
    slug: generateSlug("Gasoline"),
  },
  {
    name: "Diesel",
    nameAr: "ديزل",
    slug: generateSlug("Diesel"),
  },
  {
    name: "Hybrid",
    nameAr: "هجين",
    slug: generateSlug("Hybrid"),
  },
  {
    name: "Electric",
    nameAr: "كهربائي",
    slug: generateSlug("Electric"),
  },
  {
    name: "Plug-in Hybrid",
    nameAr: "هجين قابل للشحن",
    slug: generateSlug("Plug-in Hybrid"),
  },
  {
    name: "CNG",
    nameAr: "غاز طبيعي مضغوط",
    slug: generateSlug("CNG"),
  },
  {
    name: "LPG",
    nameAr: "غاز البترول المسال",
    slug: generateSlug("LPG"),
  },
  {
    name: "Ethanol",
    nameAr: "إيثانول",
    slug: generateSlug("Ethanol"),
  },
  {
    name: "Hydrogen",
    nameAr: "هيدروجين",
    slug: generateSlug("Hydrogen"),
  },
];

export async function seedCarFuelTypes() {
  console.log("Seeding car fuel types...");

  await prisma.carFuelType.deleteMany();
  const result = await prisma.carFuelType.createMany({
    data: carFuelTypes,
    skipDuplicates: true,
  });

  console.log(
    `Seeded ${result.count} new car fuel types (${carFuelTypes.length} total in data)`
  );
}
