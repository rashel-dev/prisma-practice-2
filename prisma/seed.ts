import { prisma, pool } from "../src/lib/prisma.js";

async function seed() {
    console.log("🚀 Starting database seeding...");
    console.log("🚀1. starting user data seeding");
    await prisma.user.createMany({
        data: [
            {
              name: "Rahim",
              email: "rahim@email.com",
              age: 28,
              address: "Dhaka",
              isMarried: true,
              nationality: "Bangladeshi",
            },
            {
              name: "Karim",
              email: "karim@email.com",
              age: 25,
              address: "Chattogram",
              isMarried: false,
              nationality: "Bangladeshi",
            },
            {
              name: "Jabbar",
              email: "jabbar@email.com",
              age: 32,
              address: "Khulna",
              isMarried: true,
              nationality: "Bangladeshi",
            },
            {
              name: "Hasan",
              email: "hasan@email.com",
              age: 24,
              address: "Rajshahi",
              isMarried: false,
              nationality: "Bangladeshi",
            },
            {
              name: "Hossain",
              email: "hossain@email.com",
              age: 30,
              address: "Sylhet",
              isMarried: true,
              nationality: "Bangladeshi",
            },
            {
              name: "Rakib",
              email: "rakib@email.com",
              age: 27,
              address: "Barishal",
              isMarried: false,
              nationality: "Bangladeshi",
            },
            {
              name: "Sakib",
              email: "sakib@email.com",
              age: 29,
              address: "Cumilla",
              isMarried: true,
              nationality: "Bangladeshi",
            },
            {
              name: "Nadim",
              email: "nadim@email.com",
              age: 23,
              address: "Rangpur",
              isMarried: false,
              nationality: "Bangladeshi",
            },
            {
              name: "Farhan",
              email: "farhan@email.com",
              age: 26,
              address: "Mymensingh",
              isMarried: false,
              nationality: "Bangladeshi",
            },
            {
              name: "Tanvir",
              email: "tanvir@email.com",
              age: 31,
              address: "Gazipur",
              isMarried: true,
              nationality: "Bangladeshi",
            },
          ],
        skipDuplicates: true,
    });

    console.log("✅ user data seeding completed");

    console.log("🚀2. starting student data seeding");

    await prisma.student.createMany({
        data: [
            { name: "Sakib", father_name: "Abdul", mother_name: "Amina" },
            { name: "Nahid", father_name: "Hasan", mother_name: "Fatima" },
            { name: "Tanvir", father_name: "Hossain", mother_name: "Rokeya" },
            { name: "Rakib", father_name: "Karim", mother_name: "Shirin" },
            { name: "Farhan", father_name: "Rahman", mother_name: "Salma" },
            { name: "Nadim", father_name: "Jalal", mother_name: "Nasima" },
            { name: "Hasan", father_name: "Kamal", mother_name: "Rina" },
            { name: "Imran", father_name: "Anwar", mother_name: "Sultana" },
            { name: "Mahin", father_name: "Rashid", mother_name: "Parvin" },
            { name: "Fahim", father_name: "Aziz", mother_name: "Jahanara" },
        ],
        skipDuplicates: true,
    });

    console.log("✅ student data seeding completed");

    console.log("✅ Seed completed!");
}

seed()
    .catch((e) => {
        console.error("❌ Seed failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
