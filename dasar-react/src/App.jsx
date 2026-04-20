import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Parent from "./components/Parent";

function App() {
  return (
    <div id="center">
      <Header title="Header" />
      <Parent message="Hello, World!" />
      <Footer title="Footer" />
    </div>
  );
}

export default App;
