import React from 'react';
import styles from './AddCardForm.module.css';

function AddCardForm(): JSX.Element {
  return (
    <section className={styles.add__section}>
      <div className={styles.add__header}>Create your card</div>
      <form className={styles.add__table}>
        <label className={styles.add__text}>
          Card name:
          <input type="text" className={styles.textbox} defaultValue={''} />
          <span className={styles.name} style={{ display: 'none' }}>
            Incorrect input!
          </span>
        </label>
        <label className={styles.add__checkbox}>
          Card color:
          <div className={styles.card__checkbox}>
            <div style={{ backgroundColor: `blue` }} className={styles.card__color}></div>
            <input type="checkbox" id="color-1" name="color" value="blue" />
          </div>
          <div className={styles.card__checkbox}>
            <div style={{ backgroundColor: `red` }} className={styles.card__color}></div>
            <input type="checkbox" id="color-2" name="color" value="red" />
          </div>
          <div className={styles.card__checkbox}>
            <div style={{ backgroundColor: `green` }} className={styles.card__color}></div>
            <input type="checkbox" id="color-3" name="color" value="green" />
          </div>
          <div className={styles.card__checkbox}>
            <div style={{ backgroundColor: `black` }} className={styles.card__color}></div>
            <input type="checkbox" id="color-4" name="color" value="black" />
          </div>
          <div className={styles.card__checkbox}>
            <div style={{ backgroundColor: `white` }} className={styles.card__color}></div>
            <input type="checkbox" id="color-5" name="color" value="white" />
          </div>
          <span className={styles.name} style={{ display: 'none' }}>
            Color set to none!
          </span>
        </label>
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
          <input type="date" className={styles.textbox} />
          <span className={styles.name} style={{ display: 'none' }}>
            Enter the date!
          </span>
        </label>
      </form>
    </section>
  );
}
export default AddCardForm;
