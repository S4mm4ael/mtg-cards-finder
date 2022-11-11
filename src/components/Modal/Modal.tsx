/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
export function Modal(array: any, id: string) {
  const cardArray = array.array.cards;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedIndex(cardArray.findIndex((el: any) => el.id == id));
  }, [cardArray, id]);
  console.log(id);
  console.log(selectedIndex);

  return <div className={styles.modal__wrapper}> </div>;
}
