import "modern-normalize";
import "../App/GlobalStyle.css";

import Profile from "../Profile/Profile";
import user from "../Profile/userData.json";

export default function App() {
  return (
    <body>
      <Profile items={user} />
    </body>
  );
}
