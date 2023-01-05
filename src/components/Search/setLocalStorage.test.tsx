import { setLocalStorage } from './setLocalStorage';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock as unknown as Storage;

test('setLocalStorage should set and get items to/from localStorage', () => {
  setLocalStorage('chicken');
  const items = localStorage.getItem('lastQuery') || '{}';
  expect(items).toEqual('chicken');
});
