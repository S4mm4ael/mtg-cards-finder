const items = [
  {
    name: 'Item One',
  },
];

const setLocalStorage = () => {
  if (!localStorage.getItem('items')) {
    localStorage.setItem('items', JSON.stringify(items));
  }
};
export default setLocalStorage;
