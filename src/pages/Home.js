import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="text-box">
        <h1>Welcome to JavaScriptive</h1>
        <p>
          ...a place to learn <br /> and find inspiration. Check out our JavaScript and CSS tuts or go straight to animation and game development... hope you find something useful.
        </p>
        <div className="bottom-row">
          <Link className="action-btn" to="/css">
            LET'S GO!
          </Link>
        </div>
      </div>
      <div className="tap-message">tap screen</div>
      <div className="tap-message tap-message-2">tap screen</div>
    </div>
  );
}
