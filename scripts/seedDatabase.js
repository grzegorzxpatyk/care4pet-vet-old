const { db } = require('@vercel/postgres');
const { customers, pets } = require('../app/lib/placeholder-data');

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
          CREATE TABLE IF NOT EXISTS customers (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phoneNumber VARCHAR(20) NOT NULL
        );
        `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(async (customer) => {
        return client.sql`
            INSERT INTO customers (id, name, email, phoneNumber)
            VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.phoneNumber})
            ON CONFLICT (id) DO NOTHING;
          `;
      })
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedPets(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "pets" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS pets (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            age INT NOT NULL,
            species VARCHAR(50) NOT NULL,
            isMicrochipped BOOLEAN NOT NULL,
            microchipNumber INT,
            ownerId UUID,
            FOREIGN KEY (ownerId) REFERENCES customers(id)
        );
        `;

    console.log(`Created "pets" table`);

    // Insert data into the "pets" table
    const insertedPets = await Promise.all(
      pets.map(async (pet) => {
        return client.sql`
            INSERT INTO pets (id, name, age, species, isMicrochipped, microchipNumber, ownerId)
            VALUES (${pet.id}, ${pet.name}, ${pet.age}, ${pet.species}, ${pet.isMicrochipped}, ${pet.microchipNumber}, ${pet.ownerId})
            ON CONFLICT (id) DO NOTHING;
          `;
      })
    );

    console.log(`Seeded ${insertedPets.length} pets`);

    return {
      createTable,
      customers: insertedPets,
    };
  } catch (error) {
    console.error('Error seeding pets:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCustomers(client);
  await seedPets(client);

  await client.end();
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err);
});
