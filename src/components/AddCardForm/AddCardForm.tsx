import React from 'react';
import './checkbox.css';
import styles from './AddCardForm.module.css';

function AddCardForm(): JSX.Element {
  return (
    <section className={styles.add__section}>
      <h2 className={styles.add__header}>Create your card</h2>
      <form className={styles.add__table}>
        <label className={styles.add__text}>
          Card name:
          <input type="text" className={styles.textbox} defaultValue={''} />
          <span className={styles.name} style={{ display: 'none' }}>
            Incorrect input!
          </span>
        </label>
        <div className={styles.add__checkbox}>
          Card color:
          <div className={styles.checkbox__wrapper}>
            <div className={styles.card__checkbox}>
              <label className={styles.color__label}>
                <div style={{ backgroundColor: `blue` }} className={styles.card__color}></div>
                <input type="checkbox" id="color-1" name="color" value="blue" />
              </label>
            </div>
            <label className={styles.color__label}>
              <div className={styles.card__checkbox}>
                <div style={{ backgroundColor: `red` }} className={styles.card__color}></div>
                <input type="checkbox" id="color-2" name="color" value="red" />
              </div>
            </label>

            <label className={styles.color__label}>
              <div className={styles.card__checkbox}>
                <div style={{ backgroundColor: `green` }} className={styles.card__color}></div>
                <input type="checkbox" id="color-3" name="color" value="green" />
              </div>
            </label>

            <label className={styles.color__label}>
              <div className={styles.card__checkbox}>
                <div style={{ backgroundColor: `black` }} className={styles.card__color}></div>
                <input type="checkbox" id="color-4" name="color" value="black" />
              </div>
            </label>

            <label className={styles.color__label}>
              <div className={styles.card__checkbox}>
                <div style={{ backgroundColor: `white` }} className={styles.card__color}></div>
                <input type="checkbox" id="color-5" name="color" value="white" />
              </div>
            </label>
          </div>
          <span className={styles.name} style={{ display: 'none' }}>
            Color set to none!
          </span>
        </div>
        <label className={styles.add__text}>
          Card type:
          <select name="" id="card-type">
            <option className="add__text">Choose card type</option>
            <option className="add__text">Creature</option>
            <option className="add__text">Planeswalker</option>
            <option className="add__text">Artefact</option>
            <option className="add__text">Instant</option>
            <option className="add__text">Sorcery</option>
            <option className="add__text">Enchantment</option>
            <option className="add__text">Land</option>
          </select>
        </label>
        <label className={styles.add__text}>
          Card adding date:
          <input
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            max="2025-12-31"
            className={styles.textbox}
          />
          <span className={styles.name} style={{ display: 'none' }}>
            Enter the date!
          </span>
        </label>
        <label className={styles.add__checkbox}>
          Availability:
          {/* <!-- Toggle Button Style 8 --> */}
          <label className="toggler-wrapper style-9">
            <input type="checkbox" />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </label>
        <label className={styles.add__text}>
          Url to card image:
          <input type="text" className={styles.textbox} defaultValue={''} />
          <span className={styles.name} style={{ display: 'none' }}>
            Enter image url!
          </span>
        </label>
      </form>
    </section>
  );
}
export default AddCardForm;
