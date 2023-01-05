export function setLocalStorage(query: string): void {
  localStorage.setItem('lastQuery', query);
}
export function getLocalStorage(): string {
  let lastQuery = localStorage.getItem('lastQuery');
  if (lastQuery === null) {
    lastQuery = '';
  }
  return lastQuery;
}
