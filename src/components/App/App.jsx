import Profile from "../Profile/Profile";

export default function App() {
  const imgURL =
    "https://masterpiecer-images.s3.yandex.net/37d9d9d5799f11ee99fbbadf81d486ab:upscaled";
  return (
    <div>
      <h1>Super title</h1>
      <p>Hello React</p>
      <img
        src="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"
        alt="it is cat"
        height={300}
      />
      <img src={imgURL} alt="cat 2" height={300} />
      <Profile />
    </div>
  );
}
