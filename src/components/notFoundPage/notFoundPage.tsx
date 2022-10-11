import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <h2>Wrong place, man</h2>
        <h3>ERROR 404</h3>
        <Link className="active-page" to="/main">
          Go to Main
        </Link>
      </div>
    );
  }
}
export default NotFoundPage;
