import { setLocalStorage } from './setLocalStorage';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock as unknown as Storage;

test('setLocalStorage should set items to localStorage', () => {
  setLocalStorage('chicken');
  const items = JSON.parse(localStorage.getItem('searchItems') || '{}');
  expect(items).toEqual({
    lastQuery: 'chicken',
  });
});
