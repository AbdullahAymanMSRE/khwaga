import prisma from "@/lib/prisma";

// Sample users for car posts
export const sampleUsers = [
  {
    id: "user_1_ahmed_seller",
    name: "Ahmed Mohammed",
    email: "ahmed.seller@example.com",
    image: null,
  },
  {
    id: "user_2_sara_dealer",
    name: "Sara Al-Zahra",
    email: "sara.dealer@example.com",
    image: null,
  },
  {
    id: "user_3_omar_private",
    name: "Omar Hassan",
    email: "omar.private@example.com",
    image: null,
  },
  {
    id: "user_4_fatima_collector",
    name: "Fatima Al-Ahmad",
    email: "fatima.collector@example.com",
    image: null,
  },
  {
    id: "user_5_khalid_trader",
    name: "Khalid Al-Mansouri",
    email: "khalid.trader@example.com",
    image: null,
  },
];

// Sample car posts with realistic data
export const carPostsData = [
  {
    title: "2022 Toyota Camry - Excellent Condition",
    description:
      "Well-maintained 2022 Toyota Camry with low mileage. Single owner, all service records available. Perfect for daily commuting. Features include backup camera, adaptive cruise control, and heated seats.",
    price: 28500, // USD in cents
    year: 2022,
    mileage: 15000,
    color: "Pearl White",
    engineSize: 2500, // 2.5L in cc
    doors: 4,
    seats: 5,
    userEmail: "ahmed.seller@example.com",
    carMakeName: "Toyota",
    carModelName: "Camry",
    carBodyTypeName: "Sedan",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "Automatic",
  },
  {
    title: "2020 Honda CR-V EX - Family SUV",
    description:
      "Spacious and reliable Honda CR-V perfect for families. Includes all-wheel drive, sunroof, and advanced safety features. Regular maintenance done at authorized dealer.",
    price: 32000,
    year: 2020,
    mileage: 35000,
    color: "Modern Steel Metallic",
    engineSize: 1500, // 1.5L turbo
    doors: 4,
    seats: 5,
    userEmail: "sara.dealer@example.com",
    carMakeName: "Honda",
    carModelName: "CR-V",
    carBodyTypeName: "SUV",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "CVT",
  },
  {
    title: "2019 BMW X5 - Luxury Performance",
    description:
      "Premium BMW X5 with M Sport package. Loaded with luxury features including leather seats, panoramic roof, premium sound system, and advanced driver assistance. Garage kept.",
    price: 52000,
    year: 2019,
    mileage: 42000,
    color: "Jet Black",
    engineSize: 3000, // 3.0L
    doors: 4,
    seats: 7,
    userEmail: "omar.private@example.com",
    carMakeName: "BMW",
    carModelName: "X5",
    carBodyTypeName: "SUV",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "Automatic",
  },
  {
    title: "2023 Toyota Prius - Eco-Friendly",
    description:
      "Brand new Toyota Prius with exceptional fuel economy. Perfect for environmentally conscious drivers. Includes latest Toyota Safety Sense 2.0 and multimedia system.",
    price: 31000,
    year: 2023,
    mileage: 8000,
    color: "Blue Magnetism",
    engineSize: 1800, // 1.8L hybrid
    doors: 4,
    seats: 5,
    userEmail: "fatima.collector@example.com",
    carMakeName: "Toyota",
    carModelName: "Prius",
    carBodyTypeName: "Hatchback",
    carFuelTypeName: "Hybrid",
    carTransmissionName: "CVT",
  },
  {
    title: "2021 Ford F-150 - Workhorse Pickup",
    description:
      "Reliable Ford F-150 crew cab pickup truck. Perfect for work and play. Features 4WD, towing package, and bed liner. Well maintained with detailed service history.",
    price: 45000,
    year: 2021,
    mileage: 28000,
    color: "Oxford White",
    engineSize: 3500, // 3.5L EcoBoost
    doors: 4,
    seats: 6,
    userEmail: "khalid.trader@example.com",
    carMakeName: "Ford",
    carModelName: "F-150",
    carBodyTypeName: "Pickup Truck",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "Automatic",
  },
  {
    title: "2020 Mercedes-Benz C-Class - Executive Sedan",
    description:
      "Elegant Mercedes-Benz C-Class with premium interior and smooth ride quality. Includes AMG styling package, navigation system, and driver assistance features.",
    price: 38000,
    year: 2020,
    mileage: 31000,
    color: "Obsidian Black Metallic",
    engineSize: 2000, // 2.0L turbo
    doors: 4,
    seats: 5,
    userEmail: "sara.dealer@example.com",
    carMakeName: "Mercedes-Benz",
    carModelName: "C-Class",
    carBodyTypeName: "Sedan",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "Automatic",
  },
  {
    title: "2018 Honda Civic Sport - Sporty Compact",
    description:
      "Fun-to-drive Honda Civic Sport with manual transmission. Great for young professionals. Features sport suspension, alloy wheels, and turbo engine.",
    price: 22000,
    year: 2018,
    mileage: 45000,
    color: "Rallye Red",
    engineSize: 1500, // 1.5L turbo
    doors: 4,
    seats: 5,
    userEmail: "ahmed.seller@example.com",
    carMakeName: "Honda",
    carModelName: "Civic",
    carBodyTypeName: "Sedan",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "Manual",
  },
  {
    title: "2019 Toyota RAV4 - Adventure Ready",
    description:
      "Capable Toyota RAV4 with all-wheel drive. Perfect for weekend adventures and daily commuting. Includes roof rails, upgraded infotainment, and safety suite.",
    price: 29500,
    year: 2019,
    mileage: 38000,
    color: "Magnetic Gray Metallic",
    engineSize: 2500, // 2.5L
    doors: 4,
    seats: 5,
    userEmail: "omar.private@example.com",
    carMakeName: "Toyota",
    carModelName: "RAV4",
    carBodyTypeName: "SUV",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "Automatic",
  },
  {
    title: "2022 BMW 3 Series - Sport Luxury",
    description:
      "Sophisticated BMW 3 Series with sport package. Combines luxury and performance perfectly. Features premium leather, advanced tech, and dynamic handling.",
    price: 43000,
    year: 2022,
    mileage: 18000,
    color: "Storm Bay",
    engineSize: 2000, // 2.0L turbo
    doors: 4,
    seats: 5,
    userEmail: "fatima.collector@example.com",
    carMakeName: "BMW",
    carModelName: "3 Series",
    carBodyTypeName: "Sedan",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "Automatic",
  },
  {
    title: "2021 Honda Accord - Executive Choice",
    description:
      "Reliable Honda Accord with spacious interior and excellent fuel economy. Perfect for business professionals. Includes heated seats, sunroof, and Honda Sensing.",
    price: 27500,
    year: 2021,
    mileage: 25000,
    color: "Platinum White Pearl",
    engineSize: 1500, // 1.5L turbo
    doors: 4,
    seats: 5,
    userEmail: "khalid.trader@example.com",
    carMakeName: "Honda",
    carModelName: "Accord",
    carBodyTypeName: "Sedan",
    carFuelTypeName: "Gasoline",
    carTransmissionName: "CVT",
  },
];

export async function seedCarPosts() {
  console.log("Seeding car posts...");

  // First, create sample users
  console.log("Creating sample users...");
  await prisma.user.deleteMany({
    where: {
      email: {
        in: sampleUsers.map((user) => user.email),
      },
    },
  });

  await prisma.user.createMany({
    data: sampleUsers,
    skipDuplicates: true,
  });

  // Then create car posts
  console.log("Creating car posts...");
  await prisma.carPost.deleteMany();

  let createdPosts = 0;
  for (const postData of carPostsData) {
    try {
      // Find the user
      const user = await prisma.user.findUnique({
        where: { email: postData.userEmail },
      });

      if (!user) {
        console.warn(`User not found for email: ${postData.userEmail}`);
        continue;
      }

      // Find the car make and model
      const carMake = await prisma.carMake.findFirst({
        where: { name: postData.carMakeName },
      });

      if (!carMake) {
        console.warn(`Car make not found: ${postData.carMakeName}`);
        continue;
      }

      const carModel = await prisma.carModel.findFirst({
        where: {
          name: postData.carModelName,
          carMakeId: carMake.id,
        },
      });

      if (!carModel) {
        console.warn(
          `Car model not found: ${postData.carModelName} for make ${postData.carMakeName}`
        );
        continue;
      }

      // Find optional relationships
      const carBodyType = await prisma.carBodyType.findFirst({
        where: { name: postData.carBodyTypeName },
      });

      const carFuelType = await prisma.carFuelType.findFirst({
        where: { name: postData.carFuelTypeName },
      });

      const carTransmission = await prisma.carTransmission.findFirst({
        where: { name: postData.carTransmissionName },
      });

      if (!carTransmission) {
        console.warn(
          `Car transmission not found: ${postData.carTransmissionName}`
        );
        continue;
      }

      // Create the car post
      await prisma.carPost.create({
        data: {
          title: postData.title,
          description: postData.description,
          price: postData.price,
          year: postData.year,
          mileage: postData.mileage,
          color: postData.color,
          engineSize: postData.engineSize,
          doors: postData.doors,
          seats: postData.seats,
          userId: user.id,
          carModelId: carModel.id,
          carBodyTypeId: carBodyType?.id,
          carFuelTypeId: carFuelType?.id,
          carTransmissionId: carTransmission.id,
        },
      });

      createdPosts++;
    } catch (error) {
      console.error(`Error creating car post: ${postData.title}`, error);
    }
  }

  console.log(
    `Seeded ${createdPosts} car posts out of ${carPostsData.length} attempted`
  );
}
