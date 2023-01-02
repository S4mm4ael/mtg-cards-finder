import { GlobalContext } from 'contexts/Context';
import React, { useContext, useState } from 'react';
import { getCard } from '../../utils/fetch';

function CardDetails(props: { id: string }) {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState(false);

  const { state } = useContext(GlobalContext);

  return <div></div>;
}

export default CardDetails;
