import React, { useState } from 'react';
import './checkbox.css';
import styles from './AddCardForm.module.css';
import { Card } from 'components/Card/Card';
import { cardArray } from 'components/Card/cardData';

function AddCardForm(): JSX.Element {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
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
  const [typeError, setTypeError] = useState('Type cannot be empty!');
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
              defaultValue={''}
              value={name}
            />
            {nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
          </div>
        </label>
        <div className={styles.add__checkbox}>
          Card color:
          <div className={styles.input__wrapper}>
            <div className={styles.checkbox__wrapper}>
              <div className={styles.card__checkbox}>
                <label className={styles.color__label}>
                  <div style={{ backgroundColor: `blue` }} className={styles.card__color}></div>
                  <input
                    onBlur={(e) => blurHandler(e)}
                    className={styles.hidden__checkbox}
                    type="checkbox"
                    id="color-1"
                    name="color"
                    value="blue"
                  />
                </label>
              </div>
              <label className={styles.color__label}>
                <div className={styles.card__checkbox}>
                  <div style={{ backgroundColor: `red` }} className={styles.card__color}></div>
                  <input
                    onBlur={(e) => blurHandler(e)}
                    className={styles.hidden__checkbox}
                    type="checkbox"
                    id="color-2"
                    name="color"
                    value="red"
                  />
                </div>
              </label>

              <label className={styles.color__label}>
                <div className={styles.card__checkbox}>
                  <div style={{ backgroundColor: `green` }} className={styles.card__color}></div>
                  <input
                    onBlur={(e) => blurHandler(e)}
                    className={styles.hidden__checkbox}
                    type="checkbox"
                    id="color-3"
                    name="color"
                    value="green"
                  />
                </div>
              </label>

              <label className={styles.color__label}>
                <div className={styles.card__checkbox}>
                  <div style={{ backgroundColor: `black` }} className={styles.card__color}></div>
                  <input
                    onBlur={(e) => blurHandler(e)}
                    className={styles.hidden__checkbox}
                    type="checkbox"
                    id="color-4"
                    name="color"
                    value="black"
                  />
                </div>
              </label>

              <label className={styles.color__label}>
                <div className={styles.card__checkbox}>
                  <div style={{ backgroundColor: `white` }} className={styles.card__color}></div>
                  <input
                    onBlur={(e) => blurHandler(e)}
                    className={styles.hidden__checkbox}
                    type="checkbox"
                    id="color-5"
                    name="color"
                    value="white"
                  />
                </div>
              </label>
            </div>
            {colorDirty && colorError && <div style={{ color: 'red' }}>{colorError}</div>}
          </div>
        </div>
        <label className={styles.add__text}>
          Card type:
          <div className={styles.input__wrapper}>
            <select onBlur={(e) => blurHandler(e)} name="type" id="card-type">
              <option className="add__text">Choose card type</option>
              <option className="add__text">Creature</option>
              <option className="add__text">Planeswalker</option>
              <option className="add__text">Artefact</option>
              <option className="add__text">Instant</option>
              <option className="add__text">Sorcery</option>
              <option className="add__text">Enchantment</option>
              <option className="add__text">Land</option>
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
