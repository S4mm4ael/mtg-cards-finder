const setLocalStorage = (query = '') => {
  const searchItems = {
    lastQuery: '',
  };
  searchItems.lastQuery = query;

  if (!localStorage.getItem('searchItems')) {
    localStorage.setItem('searchItems', JSON.stringify(searchItems));
  }
};
export default setLocalStorage;
