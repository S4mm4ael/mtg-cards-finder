export async function getCards(url: string) {
  try {
    const response = await fetch(`${url}`);
    if (response.status === 200) {
      const cards = await response.json();
      return cards;
    }
    if (response.status !== 200) {
      throw new Error(`Something went wrong... Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
