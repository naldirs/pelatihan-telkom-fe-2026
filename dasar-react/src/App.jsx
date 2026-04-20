import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParentZustand from "./components/ParentZustand";

function App() {
  return (
    <div id="center">
      <Header title="Header" />
      <ParentZustand />
      <Footer title="Footer" />
    </div>
  );
}

export default App;
