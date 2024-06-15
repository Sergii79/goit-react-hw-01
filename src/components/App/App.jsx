import Profile from "../Profile/Profile";
import user from "../Profile/userData.json";
import "modern-normalize";
import "../App/GlobalStyle.css";

export default function App() {
  return (
    <body>
      <Profile items={user} />
    </body>
  );
}
