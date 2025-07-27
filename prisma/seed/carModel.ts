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

export const carModels = [
  // Toyota models
  {
    name: "Camry",
    nameAr: "كامري",
    makeName: "Toyota",
  },
  {
    name: "Corolla",
    nameAr: "كورولا",
    makeName: "Toyota",
  },
  {
    name: "RAV4",
    nameAr: "راف 4",
    makeName: "Toyota",
  },
  {
    name: "Prius",
    nameAr: "بريوس",
    makeName: "Toyota",
  },
  {
    name: "Highlander",
    nameAr: "هايلاندر",
    makeName: "Toyota",
  },
  // Honda models
  {
    name: "Civic",
    nameAr: "سيفيك",
    makeName: "Honda",
  },
  {
    name: "Accord",
    nameAr: "أكورد",
    makeName: "Honda",
  },
  {
    name: "CR-V",
    nameAr: "سي آر-في",
    makeName: "Honda",
  },
  {
    name: "Pilot",
    nameAr: "بايلوت",
    makeName: "Honda",
  },
  {
    name: "Ridgeline",
    nameAr: "ريدج لاين",
    makeName: "Honda",
  },
  // Ford models
  {
    name: "F-150",
    nameAr: "إف-150",
    makeName: "Ford",
  },
  {
    name: "Mustang",
    nameAr: "موستانغ",
    makeName: "Ford",
  },
  {
    name: "Explorer",
    nameAr: "إكسبلورر",
    makeName: "Ford",
  },
  {
    name: "Escape",
    nameAr: "إسكيب",
    makeName: "Ford",
  },
  {
    name: "Fusion",
    nameAr: "فيوجن",
    makeName: "Ford",
  },
  // BMW models
  {
    name: "3 Series",
    nameAr: "الفئة الثالثة",
    makeName: "BMW",
  },
  {
    name: "5 Series",
    nameAr: "الفئة الخامسة",
    makeName: "BMW",
  },
  {
    name: "X3",
    nameAr: "إكس 3",
    makeName: "BMW",
  },
  {
    name: "X5",
    nameAr: "إكس 5",
    makeName: "BMW",
    country: "Germany",
  },
  {
    name: "7 Series",
    nameAr: "الفئة السابعة",
    makeName: "BMW",
  },
  // Mercedes-Benz models
  {
    name: "C-Class",
    nameAr: "الفئة سي",
    makeName: "Mercedes-Benz",
  },
  {
    name: "E-Class",
    nameAr: "الفئة إي",
    makeName: "Mercedes-Benz",
  },
  {
    name: "S-Class",
    nameAr: "الفئة إس",
    makeName: "Mercedes-Benz",
  },
  {
    name: "GLE",
    nameAr: "جي إل إي",
    makeName: "Mercedes-Benz",
  },
  {
    name: "GLA",
    nameAr: "جي إل إيه",
    makeName: "Mercedes-Benz",
  },
];

export async function seedCarModels() {
  console.log("Seeding car models...");

  await prisma.carModel.deleteMany();
  for (const model of carModels) {
    const carMake = await prisma.carMake.findFirst({
      where: {
        name: model.makeName,
      },
    });

    if (carMake) {
      await prisma.carModel.create({
        data: {
          name: model.name,
          nameAr: model.nameAr,
          slug: generateSlug(model.name),
          carMakeId: carMake.id,
        },
      });
    }
  }

  console.log(`Seeded ${carModels.length} car models`);
}
