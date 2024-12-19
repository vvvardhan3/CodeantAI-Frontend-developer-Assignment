import "./App.css";
import "./components/Frame";
import Frame from "./components/Frame";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <div className="signinpage">
        <Frame />

        <SignIn />
      </div>
    </>
  );
}

export default App;
