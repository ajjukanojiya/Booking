const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.ride.createMany({
    data: [
      { driverName: "Ravi Kumar", price: 90, rating: "5.0", pickup: "Noida", dropoff: "Gurugram" },
      { driverName: "Sharad", price: 120, rating: "4.8", pickup: "Delhi", dropoff: "Noida" },
      { driverName: "Amit", price: 85, rating: "4.5", pickup: "Faridabad", dropoff: "Delhi" },
      { driverName: "Rahul", price: 150, rating: "4.9", pickup: "Gurugram", dropoff: "Faridabad" }
    ]
  });
  console.log("Database mein 4 gaadiyan successfully daal di gayi hain!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
