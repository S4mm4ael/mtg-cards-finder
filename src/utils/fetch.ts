export async function getCards(url: string, page: number | undefined) {
  try {
    const response = await fetch(`${url}?page=${page}`);

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
export async function getSearchedCard(name: string) {
  const url = 'https://api.magicthegathering.io/v1/cards';
  try {
    const response = await fetch(`${url}?name=${name}`);

    if (response.status === 200) {
      const card = await response.json();

      return card;
    }
    if (response.status !== 200) {
      throw new Error(`Something went wrong... Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getCard(id: string) {
  try {
    const response = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`);

    if (response.status === 200) {
      const card = await response.json();
      return card;
    }
    if (response.status !== 200) {
      throw new Error(`Something went wrong... Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
