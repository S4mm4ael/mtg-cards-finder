export function setLocalStorage(query: string): void {
  localStorage.setItem('lastQuery', query);
}
export function getLocalStorage(): string | null {
  return localStorage.getItem('lastQuery');
}
