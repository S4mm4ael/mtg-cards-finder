export async function getCards(page: number) {
  const url = 'https://api.magicthegathering.io/v1/cards';
  const newUrl = `${url}?page=${page}`;

  try {
    const response = await fetch(newUrl);

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
  const newUrl = `${url}?name=${name}`;

  try {
    const response = await fetch(newUrl);

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
