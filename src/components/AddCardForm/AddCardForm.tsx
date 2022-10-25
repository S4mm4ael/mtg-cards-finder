import React, { useState } from 'react';
import './checkbox.css';
import styles from './AddCardForm.module.css';
import { Card } from 'components/Card/Card';
import { cardArray } from 'components/Card/cardData';
import { colors } from './colors';
import { types } from './types';

function AddCardForm(): JSX.Element {
  const [name, setName] = useState('');
  const [colorSet, setColor] = useState(new Set());
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [colorDirty, setColorDirty] = useState(false);
  const [typeDirty, setTypeDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [urlDirty, setUrlDirty] = useState(false);

  const [nameError, setNameError] = useState('Name cannot be empty!');
  const [colorError, setColorError] = useState('Color set to none');
  const [typeError, setTypeError] = useState('Please select type');
  const [dateError, setDateError] = useState('Date set to current');
  const [urlError, setUrlError] = useState('Please check card image url!');

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setName(e.target.value);
    const re =
      /^['' a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Wrong name format');
    } else {
      setNameError('');
    }
  };
  const urlHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUrl(e.target.value);
    const re =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUrlError('Wrong URL format');
    } else {
      setUrlError('');
    }
  };
  const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);

    if (e.target.value == 'Choose card type') {
      setTypeError('Please select type');
    } else {
      setTypeError('');
    }
  };

  const colorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.checked) {
      case true:
        setColor((prev) => new Set(prev.add(e.target.value)));
        break;
      case false:
        setColor((prev) => new Set([...prev].filter((x) => x !== e.target.value)));

        break;
    }
  };
  const colorStatusCheck = (): void => {
    if (colorSet.size == 0) {
      console.log('Color set to none');

      setColorError('Color set to none');
    } else {
      console.log('');
      setColorError('');
    }
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'color':
        setColorDirty(true);
        break;
      case 'type':
        setTypeDirty(true);
        break;
      case 'date':
        setDateDirty(true);
        break;
      case 'url':
        setUrlDirty(true);
        break;
    }
  };

  return (
    <section className={styles.add__section}>
      <h2 className={styles.add__header}>Create your card</h2>
      <form className={styles.add__table}>
        <label className={styles.add__text}>
          Card name:
          <div className={styles.input__wrapper}>
            <input
              onChange={(e) => nameHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="name"
              type="text"
              className={styles.textbox}
              value={name}
            />
            {nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
          </div>
        </label>
        <div className={styles.add__checkbox}>
          Card color:
          <div className={`${styles.input__wrapper}`}>
            <div className={styles.checkbox__wrapper}>
              {colors.map(({ color }, index) => {
                return (
                  <li key={index} className={styles.card__checkbox}>
                    <label className={styles.color__label}>
                      <div style={{ backgroundColor: color }} className={styles.card__color}></div>
                      <input
                        onChange={(e) => {
                          colorHandler(e);
                        }}
                        onBlur={(e) => {
                          blurHandler(e);
                          colorStatusCheck();
                        }}
                        className={styles.hidden__checkbox}
                        type="checkbox"
                        id={`color-${index}`}
                        name="color"
                        value={color}
                      />
                    </label>
                  </li>
                );
              })}
            </div>
            {colorDirty && colorError && (
              <div style={{ color: 'red', fontSize: '0.7rem' }}>{colorError}</div>
            )}
          </div>
        </div>

        <label className={styles.add__text}>
          Card type:
          <div className={styles.input__wrapper}>
            <select
              onChange={(e) => {
                typeHandler(e);
              }}
              onBlur={(e) => blurHandler(e)}
              name="type"
              id="card-type"
              value={type}
            >
              {types.map(({ type }, index) => {
                return (
                  <option key={index} className="add__text">
                    {type}
                  </option>
                );
              })}
            </select>
            {typeDirty && typeError && <div style={{ color: 'red' }}>{typeError}</div>}
          </div>
        </label>
        <label className={styles.add__text}>
          Card adding date:
          <div className={styles.input__wrapper}>
            <input
              onBlur={(e) => blurHandler(e)}
              type="date"
              name="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              max="2025-12-31"
              className={styles.textbox}
            />
            {dateDirty && dateError && <div style={{ color: 'red' }}>{dateError}</div>}
          </div>
        </label>
        <div className={styles.add__checkbox}>
          Availability:
          <label className="toggler-wrapper style-9">
            <input onBlur={(e) => blurHandler(e)} name="availability" type="checkbox" />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </div>
        <label className={styles.add__text}>
          Url to card image:
          <div className={styles.input__wrapper}>
            <input
              onChange={(e) => urlHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="text"
              name="url"
              className={styles.textbox}
              defaultValue={''}
            />
            {urlDirty && urlError && <div style={{ color: 'red' }}>{urlError}</div>}{' '}
          </div>
        </label>
        <button className={styles.submit__button}> Submit </button>
      </form>
      <div className={`${styles.add__table} ${styles.flex__center}`}>
        <Card {...cardArray[2]} />
      </div>
    </section>
  );
}
export default AddCardForm;
