const customers = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phoneNumber: '987-654-3210',
  },
];

const pets = [
  {
    id: '11111111-1111-1111-1111-111111111112',
    name: 'Max',
    age: 3,
    species: 'Dog',
    isMicrochipped: true,
    microchipNumber: 123456789,
    ownerId: '11111111-1111-1111-1111-111111111111',
  },
  {
    id: '11111111-1111-1111-1111-111111111113',
    name: 'Luna',
    age: 2,
    species: 'Cat',
    isMicrochipped: false,
    ownerId: '11111111-1111-1111-1111-111111111111',
  },
  {
    id: '22222222-2222-2222-2222-222222222223',
    name: 'Buddy',
    age: 5,
    species: 'Dog',
    isMicrochipped: true,
    microchipNumber: 987654321,
    ownerId: '22222222-2222-2222-2222-222222222222',
  },
  {
    id: '22222222-2222-2222-2222-222222222224',
    name: 'Whiskers',
    age: 1,
    species: 'Cat',
    isMicrochipped: true,
    microchipNumber: 654321987,
    ownerId: '22222222-2222-2222-2222-222222222222',
  },
];

module.exports = {
  customers,
  pets,
};
