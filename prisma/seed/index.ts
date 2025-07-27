import { seedCarMakes } from "./carMake";
import { seedCarModels } from "./carModel";
import { seedCarBodyTypes } from "./carBodyType";
import { seedCarFuelTypes } from "./carFuelType";
import { seedCarTransmissions } from "./carTransmission";
import { seedCarPosts } from "./carPost";

async function main() {
  console.log("Starting database seeding...");

  try {
    await seedCarMakes();
    await seedCarBodyTypes();
    await seedCarFuelTypes();
    await seedCarTransmissions();
    await seedCarModels();
    await seedCarPosts();
    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    const { default: prisma } = await import("@/lib/prisma");
    await prisma.$disconnect();
  });
