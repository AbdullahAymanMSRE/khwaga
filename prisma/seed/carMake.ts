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

/**
 * IMPORTANT: Logo Setup Instructions
 * ===================================
 *
 * For production, follow these steps:
 * 1. Create a folder: public/logos/car-makes/
 * 2. Download high-quality logo images for each brand
 * 3. Save them as: public/logos/car-makes/toyota.png, public/logos/car-makes/honda.png, etc.
 * 4. Update the imageUrl values below to: "/logos/car-makes/toyota.png", etc.
 *
 * This ensures:
 * - No broken external links
 * - Faster loading
 * - Better control over image quality
 * - No dependency on external services
 *
 * Alternative: Use a reliable CDN service like Cloudinary or AWS S3
 */

export const carMakes = [
  {
    name: "Toyota",
    nameAr: "تويوتا",
    slug: generateSlug("Toyota"),
    imageUrl: null, // TODO: Add "/logos/car-makes/toyota.png" after setting up local assets
    country: "Japan",
  },
  {
    name: "Honda",
    nameAr: "هوندا",
    slug: generateSlug("Honda"),
    imageUrl: null, // TODO: Add "/logos/car-makes/honda.png" after setting up local assets
    country: "Japan",
  },
  {
    name: "Ford",
    nameAr: "فورد",
    slug: generateSlug("Ford"),
    imageUrl: null, // TODO: Add "/logos/car-makes/ford.png" after setting up local assets
    country: "United States",
  },
  {
    name: "BMW",
    nameAr: "بي إم دبليو",
    slug: generateSlug("BMW"),
    imageUrl: null, // TODO: Add "/logos/car-makes/bmw.png" after setting up local assets
    country: "Germany",
  },
  {
    name: "Mercedes-Benz",
    nameAr: "مرسيدس بنز",
    slug: generateSlug("Mercedes-Benz"),
    imageUrl: null, // TODO: Add "/logos/car-makes/mercedes-benz.png" after setting up local assets
    country: "Germany",
  },
  {
    name: "Volkswagen",
    nameAr: "فولكس فاجن",
    slug: generateSlug("Volkswagen"),
    imageUrl: null, // TODO: Add "/logos/car-makes/volkswagen.png" after setting up local assets
    country: "Germany",
  },
  {
    name: "Hyundai",
    nameAr: "هيونداي",
    slug: generateSlug("Hyundai"),
    imageUrl: null, // TODO: Add "/logos/car-makes/hyundai.png" after setting up local assets
    country: "South Korea",
  },
  {
    name: "Subaru",
    nameAr: "سوبارو",
    slug: generateSlug("Subaru"),
    imageUrl: null, // TODO: Add "/logos/car-makes/subaru.png" after setting up local assets
    country: "Japan",
  },
  {
    name: "Lexus",
    nameAr: "لكزس",
    slug: generateSlug("Lexus"),
    imageUrl: null, // TODO: Add "/logos/car-makes/lexus.png" after setting up local assets
    country: "Japan",
  },
  {
    name: "Infiniti",
    nameAr: "إنفينيتي",
    slug: generateSlug("Infiniti"),
    imageUrl: null, // TODO: Add "/logos/car-makes/infiniti.png" after setting up local assets
    country: "United States",
  },
  {
    name: "Cadillac",
    nameAr: "كاديلاك",
    slug: generateSlug("Cadillac"),
    imageUrl: null, // TODO: Add "/logos/car-makes/cadillac.png" after setting up local assets
    country: "United States",
  },
  {
    name: "Ram",
    nameAr: "رام",
    slug: generateSlug("Ram"),
    imageUrl: null, // TODO: Add "/logos/car-makes/ram.png" after setting up local assets
    country: "United States",
  },
  {
    name: "Jeep",
    nameAr: "جيب",
    slug: generateSlug("Jeep"),
    imageUrl: null, // TODO: Add "/logos/car-makes/jeep.png" after setting up local assets
    country: "United States",
  },
  {
    name: "Chrysler",
    nameAr: "كرايسلر",
    slug: generateSlug("Chrysler"),
    imageUrl: null, // TODO: Add "/logos/car-makes/chrysler.png" after setting up local assets
    country: "United States",
  },
  {
    name: "Lincoln",
    nameAr: "لينكون",
    slug: generateSlug("Lincoln"),
    imageUrl: null, // TODO: Add "/logos/car-makes/lincoln.png" after setting up local assets
    country: "United States",
  },
  {
    name: "Volvo",
    nameAr: "فولفو",
    slug: generateSlug("Volvo"),
    imageUrl: null, // TODO: Add "/logos/car-makes/volvo.png" after setting up local assets
    country: "Sweden",
  },
  {
    name: "Jaguar",
    nameAr: "جاغوار",
    slug: generateSlug("Jaguar"),
    imageUrl: null, // TODO: Add "/logos/car-makes/jaguar.png" after setting up local assets
    country: "United Kingdom",
  },
  {
    name: "Land Rover",
    nameAr: "لاند روفر",
    slug: generateSlug("Land Rover"),
    imageUrl: null, // TODO: Add "/logos/car-makes/land-rover.png" after setting up local assets
    country: "United Kingdom",
  },
  {
    name: "Genesis",
    nameAr: "جينيسيس",
    slug: generateSlug("Genesis"),
    imageUrl: null, // TODO: Add "/logos/car-makes/genesis.png" after setting up local assets
    country: "South Korea",
  },
  {
    name: "Alfa Romeo",
    nameAr: "ألفا روميو",
    slug: generateSlug("Alfa Romeo"),
    imageUrl: null, // TODO: Add "/logos/car-makes/alfa-romeo.png" after setting up local assets
    country: "Italy",
  },
  {
    name: "Fiat",
    nameAr: "فيات",
    slug: generateSlug("Fiat"),
    imageUrl: null, // TODO: Add "/logos/car-makes/fiat.png" after setting up local assets
    country: "Italy",
  },
  {
    name: "Mini",
    nameAr: "ميني",
    slug: generateSlug("Mini"),
    imageUrl: null, // TODO: Add "/logos/car-makes/mini.png" after setting up local assets
    country: "United Kingdom",
  },
  {
    name: "Mitsubishi",
    nameAr: "ميتسوبيشي",
    slug: generateSlug("Mitsubishi"),
    imageUrl: null, // TODO: Add "/logos/car-makes/mitsubishi.png" after setting up local assets
    country: "Japan",
  },
  {
    name: "Suzuki",
    nameAr: "سوزوكي",
    slug: generateSlug("Suzuki"),
    imageUrl: null, // TODO: Add "/logos/car-makes/suzuki.png" after setting up local assets
    country: "Japan",
  },
];

export async function seedCarMakes() {
  console.log("Seeding car makes...");

  await prisma.carMake.deleteMany();
  const result = await prisma.carMake.createMany({
    data: carMakes,
    skipDuplicates: true,
  });

  console.log(
    `Seeded ${result.count} new car makes (${carMakes.length} total in data)`
  );
}
