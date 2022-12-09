const url = 'https://api.magicthegathering.io/v1/cards';

export async function getCards(url: string) {
  try {
    const response = await fetch(`${url}`);
    if (response.status === 200) {
      const cards = await response.json();
      console.log(cards);

      return cards;
    }
    if (response.status !== 200) {
      throw new Error(`Something went wrong... Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
