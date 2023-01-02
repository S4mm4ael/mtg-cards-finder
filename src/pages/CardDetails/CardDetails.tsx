import { GlobalContext } from 'contexts/Context';
import React, { useContext, useEffect, useState } from 'react';
import { getCard } from '../../utils/fetch';
import ICardDetails from './ICardDetails'

function CardDetails(props: { id: string }) {
  const [card, setCard] = useState<ICardDetails | null | undefined>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState(false);

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    setIsPending(true);
    setNothing(false);
    getCard(state.id)
      .then((data) => {
        setCard(data.card);
        setIsPending(false);
        setError(null);
        data.cards.length === 0 ? setNothing(true) : setNothing(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [state.id]);

  return <div></div>;
}

export default CardDetails;
