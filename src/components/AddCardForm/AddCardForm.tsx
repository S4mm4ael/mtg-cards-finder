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
  const [availability, setAvailability] = useState('');
  const [url, setUrl] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [colorDirty, setColorDirty] = useState(false);
  const [typeDirty, setTypeDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [availabilityDirty, setAvailabilityDirty] = useState(false);
  const [urlDirty, setUrlDirty] = useState(false);

  const [nameError, setNameError] = useState('Name cannot be empty!');
  const [colorError, setColorError] = useState('Color set to none');
  const [typeError, setTypeError] = useState('Type cannot be empty!');
  const [dateError, setDateError] = useState('Date set to current');
  const [availabilityError, setAvailabilityError] = useState('Please check card availability!');
  const [urlError, setUrlError] = useState('Please check card image url!');

  return (
    <section className={styles.add__section}>
      <h2 className={styles.add__header}>Create your card</h2>
      <form className={styles.add__table}>
        <label className={styles.add__text}>
          Card name:
          <input name="name" type="text" className={styles.textbox} defaultValue={''} />
          {nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
          {/* <span className={styles.name} style={{ display: 'none' }}>
            Incorrect input!
          </span> */}
        </label>
        <div className={styles.add__checkbox}>
          Card color:
          <div className={styles.checkbox__wrapper}>
            <div className={styles.card__checkbox}>
              <label className={styles.color__label}>
                <div style={{ backgroundColor: `blue` }} className={styles.card__color}></div>
                <input
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
          {/* <span className={styles.name} style={{ display: 'none' }}>
            Color set to none!
          </span> */}
        </div>
        <label className={styles.add__text}>
          Card type:
          <select name="type" id="card-type">
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
        </label>
        <label className={styles.add__text}>
          Card adding date:
          <input
            type="date"
            name="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            max="2025-12-31"
            className={styles.textbox}
          />
          {/* <span className={styles.name} style={{ display: 'none' }}>
            Enter the date!
          </span> */}
          {dateDirty && dateError && <div style={{ color: 'red' }}>{dateError}</div>}
        </label>
        <div className={styles.add__checkbox}>
          Availability:
          <label className="toggler-wrapper style-9">
            <input name="availability" type="checkbox" />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
          {availabilityDirty && availabilityError && (
            <div style={{ color: 'red' }}>{availabilityError}</div>
          )}
        </div>
        <label className={styles.add__text}>
          Url to card image:
          <input type="text" className={styles.textbox} defaultValue={''} />
          {urlDirty && urlError && <div style={{ color: 'red' }}>{urlError}</div>}
          {/* <span className={styles.name} style={{ display: 'none' }}>
            Enter image url!
          </span> */}
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
