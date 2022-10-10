import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <p style={{ textAlign: 'center' }}>
          <h2>Wrong place, man</h2>
          <h3>ERROR 404</h3>
          <Link className="active-page" to="/main">
            Go to Main
          </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
