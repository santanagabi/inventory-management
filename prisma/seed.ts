import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const demoUserId = "4313bea8-24d0-4b2f-9d23-fc8232898d1d";
  
    // Create sample products
    await prisma.product.createMany({
        data: Array.from({ length: 25 }).map((_, i) => ({
            userId: demoUserId,
            name: `Product ${i + 1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random() * 20),
            lowStock: 5,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
        })),
    });

    console.log("Sample products created");
    console.log("Created 25 products for user ID: ", demoUserId);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

