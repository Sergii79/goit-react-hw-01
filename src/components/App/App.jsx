import Profile from "../Profile/Profile";
import user from "../Profile/userData.json";

export default function App() {
  return (
    <div>
      <Profile items={user} />
    </div>
  );
}
