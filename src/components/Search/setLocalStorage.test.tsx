import setLocalStorage from './setLocalStorage';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

test('setLocalStorage should set items to localStorage', () => {
  setLocalStorage();
  const items = JSON.parse(localStorage.getItem('items'));
  expect(items).toEqual([
    {
      name: 'Item One',
    },
  ]);
});
