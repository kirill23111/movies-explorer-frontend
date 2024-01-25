import { Link } from "react-router-dom";
import "./ErrorPage.css";

function PageNotFound() {
  return (
    <div className="error">
      <div className="error-container">
        <p className="error-code">404</p>
        <p className="error-text">Страница не найдена</p>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="error-button">Назад</p>
      </Link>
    </div>
  );
}

export default PageNotFound;
