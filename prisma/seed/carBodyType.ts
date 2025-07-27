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

export const carBodyTypes = [
  {
    name: "Sedan",
    nameAr: "سيدان",
    slug: generateSlug("Sedan"),
  },
  {
    name: "SUV",
    nameAr: "دفع رباعي",
    slug: generateSlug("SUV"),
  },
  {
    name: "Hatchback",
    nameAr: "هاتشباك",
    slug: generateSlug("Hatchback"),
  },
  {
    name: "Coupe",
    nameAr: "كوبيه",
    slug: generateSlug("Coupe"),
  },
  {
    name: "Convertible",
    nameAr: "قابل للتحويل",
    slug: generateSlug("Convertible"),
  },
  {
    name: "Wagon",
    nameAr: "واغن",
    slug: generateSlug("Wagon"),
  },
  {
    name: "Pickup Truck",
    nameAr: "شاحنة صغيرة",
    slug: generateSlug("Pickup Truck"),
  },
  {
    name: "Van",
    nameAr: "فان",
    slug: generateSlug("Van"),
  },
  {
    name: "Minivan",
    nameAr: "ميني فان",
    slug: generateSlug("Minivan"),
  },
  {
    name: "Crossover",
    nameAr: "كروس أوفر",
    slug: generateSlug("Crossover"),
  },
  {
    name: "Sports Car",
    nameAr: "سيارة رياضية",
    slug: generateSlug("Sports Car"),
  },
  {
    name: "Luxury",
    nameAr: "فاخرة",
    slug: generateSlug("Luxury"),
  },
];

export async function seedCarBodyTypes() {
  console.log("Seeding car body types...");

  await prisma.carBodyType.deleteMany();
  const result = await prisma.carBodyType.createMany({
    data: carBodyTypes,
    skipDuplicates: true,
  });

  console.log(
    `Seeded ${result.count} new car body types (${carBodyTypes.length} total in data)`
  );
}
