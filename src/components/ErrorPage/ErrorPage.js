import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <div className="error-container">
        <p className="error-code">404</p>
        <p className="error-text">Страница не найдена</p>
      </div>
      <a onClick={() => navigate(-1)} style={{ textDecoration: "none" }}>
        <p className="error-button">Назад</p>
      </a>
    </div>
  );
}
