import React, { useState, useEffect } from 'react';
import './checkbox.css';
import styles from './AddCardForm.module.css';
import { Card } from 'components/Card/Card';
import { colors } from './colors';
import { types } from './types';
import { ICard } from '../Card/ICard';
const cardArray: ICard[] = [];
function AddCardForm(): JSX.Element {
  let id = 0;
  const defaultDate = new Date().toISOString().slice(0, 10);
  const wrapper = document.getElementById('card-wrapper');

  const [name, setName] = useState('');
  const [colorSet, setColor] = useState(new Set<string>());
  const [type, setType] = useState('');
  const [date, setDate] = useState(defaultDate);
  const [url, setUrl] = useState('');
  const [incollection, setIncollection] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [nameDirty, setNameDirty] = useState(false);
  const [colorDirty, setColorDirty] = useState(false);
  const [typeDirty, setTypeDirty] = useState(false);
  const [urlDirty, setUrlDirty] = useState(false);

  const [nameError, setNameError] = useState('Name cannot be empty!');
  const [colorError, setColorError] = useState('Choose color!');
  const [typeError, setTypeError] = useState('Please select type');
  const [urlError, setUrlError] = useState('Please check card image url!');

  const [formValid, setFormValid] = useState(false);
  const [isRendered, setRenderValid] = useState(false);

  useEffect(() => {
    if (nameError || colorError || typeError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, colorError, typeError]);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setName(e.target.value);

    const re =
      /^['' a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Wrong name format!');
      setFormValid(false);
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
      setFormValid(false);
    } else {
      setUrlError('');
    }
  };
  const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);

    if (e.target.value == 'Choose card type') {
      setTypeError('Please select type');
      setFormValid(false);
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
      setColorError('Choose color!');
      setFormValid(false);
    } else {
      setColorError('');
    }
  };
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const availabilityHandler = () => {
    incollection == false ? setIncollection(true) : setIncollection(false);
  };
  const UploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Strict null checks
    setSelectedImage(e.target.files[0]);

    setFormValid(true);
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    switch (e.target.name) {
      case 'name':
        nameHandler(e);
        setNameDirty(true);
        break;
      case 'color':
        setColorDirty(true);
        break;
      case 'type':
        setTypeDirty(true);
        break;
      case 'url':
        urlHandler(e);
        setUrlDirty(true);
        break;
    }
  };
  const clearColors = (): void => {
    const colorsCheckboxes = document.getElementsByName('color') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < colorsCheckboxes.length; i++) {
      colorsCheckboxes[i].checked = false;
    }
    setColor(new Set<string>());
  };
  const submitHandler = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    wrapper?.classList.remove(`${styles.hidden}`);
    setRenderValid(true);
    setFormValid(false);
    addCardToArray();

    alert('All data saved!');
  };
  const renderHandler = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setFormValid(false);

    setName('');
    setType('Choose card type');
    setDate(defaultDate);
    setIncollection(false);
    setUrl('');

    setNameError('Name cannot be empty!');
    setColorError('Choose color!');
    setTypeError('Please select type');
    clearColors();
  };
  const addCardToArray = (): void => {
    id = id + 1;
    const card = {
      id: id,
      name: name,
      types: [type],
      incollection: incollection,
      colors: Array.from(colorSet),
      date: date,
      imageUrl: url,
      image: selectedImage,
    };
    cardArray.push(card);
  };
  return (
    <section id="add-card-form" className={styles.add__section}>
      <h2 className={styles.add__header}>Create your card</h2>
      <form className={styles.add__table}>
        <label className={styles.add__text}>
          Card name*:
          <div className={styles.input__wrapper}>
            <input
              onChange={(e) => nameHandler(e)}
              onBlur={(e) => blurHandler(e)}
              data-testid="name"
              name="name"
              type="text"
              className={styles.textbox}
              value={name}
            />
            {nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
          </div>
        </label>
        <div className={styles.add__checkbox}>
          Card color*:
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
                        data-testid={`color-${index}`}
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
          Card type*:
          <div className={styles.input__wrapper}>
            <select
              onChange={(e) => {
                typeHandler(e);
              }}
              onBlur={(e) => blurHandler(e)}
              name="type"
              id="card-type"
              data-testid="type"
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
              onChange={(e) => dateHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="date"
              name="date"
              value={date}
              max="2025-12-31"
              className={styles.textbox}
            />
          </div>
        </label>
        <div className={styles.add__checkbox}>
          Availability:
          <label className="toggler-wrapper style-9">
            <input
              onBlur={(e) => blurHandler(e)}
              onChange={() => {
                availabilityHandler();
              }}
              name="availability"
              type="checkbox"
              checked={incollection}
            />
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
              value={url}
            />
            {urlDirty && urlError && <div style={{ color: 'red' }}>{urlError}</div>}
          </div>
        </label>
        <div className={styles.add__text}>
          Or upload file from local
          <div className={styles.input__wrapper}>
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                UploadImage(e);
              }}
            />
          </div>
        </div>
        <span className={styles.required}>* - required fields</span>
        <button
          type="submit"
          id="submit"
          onClick={(e) => submitHandler(e)}
          disabled={!formValid}
          className={`${styles.submit__button} `}
          name="submit"
        >
          Submit
        </button>

        <button
          type="submit"
          onClick={(e) => {
            renderHandler(e);
          }}
          disabled={!isRendered}
          className={`${styles.submit__button} ${isRendered ? '' : styles.hidden}`}
        >
          One more
        </button>
      </form>
      <div
        id="card-wrapper"
        className={`${styles.add__table} ${styles.flex__center} ${isRendered ? '' : styles.hidden}`}
      >
        {cardArray.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
export default AddCardForm;
