import { prisma, pool } from "../src/lib/prisma.js";

async function seed() {
    console.log("🚀 Starting database seeding...");
    console.log("🚀1. starting user data seeding");
    await prisma.user.createMany({
        data: [
            { name: "Rahim", email: "rahim@email.com" },
            { name: "Karim", email: "karim@email.com" },
            { name: "Jabbar", email: "jabbar@email.com" },
            { name: "Hasan", email: "hasan@email.com" },
            { name: "Hossain", email: "hossain@email.com" },
            { name: "Rakib", email: "rakib@email.com" },
            { name: "Sakib", email: "sakib@email.com" },
            { name: "Nadim", email: "nadim@email.com" },
            { name: "Farhan", email: "farhan@email.com" },
            { name: "Tanvir", email: "tanvir@email.com" },
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
