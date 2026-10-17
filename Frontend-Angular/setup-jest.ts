import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

jest.mock('@faker-js/faker', () => ({
  faker: {
    commerce: {
      productName: jest.fn(() => 'Producto Test'),
      productMaterial: jest.fn(() => 'Aluminio'),
      productDescription: jest.fn(() => 'Descripción Test'),
      isbn: jest.fn(() => '978-3-16-148410-0'),
      price: jest.fn(() => '10.00'),
    },
    person: {
      firstName: jest.fn(() => 'Juan'),
      lastName: jest.fn(() => 'Pérez'),
    },
    number: {
      int: jest.fn(() => 30),
    },
    internet: {
      email: jest.fn(() => 'test@mail.com'),
    },
    helpers: {
      arrayElement: jest.fn((arr: unknown[]) => arr[0]),
    },
  },
}));