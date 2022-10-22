import React from 'react';
import { Link } from 'react-router-dom';
class NotFound extends React.Component {
  render(): JSX.Element {
    return (
      <div
        id="not-found"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2>Wrong place, man</h2>
        <img
          src="https://cdn11.bigcommerce.com/s-3b5vpig99v/images/stencil/1280x1280/products/523529/984396/BlankCard03_BLANK__38209.1650320115.jpg?c=2"
          alt="Blank card"
          height={300}
        />
        <h3>ERROR 404</h3>

        <Link style={{ color: 'red' }} className="active-page" to="/">
          Go to Main
        </Link>
      </div>
    );
  }
}
export default NotFound;
