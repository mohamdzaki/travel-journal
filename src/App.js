import "./App.css";
import { data } from "./ExperienceData";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const CardEle = data.map((experience) => {
    return <Card {...experience} />;
  });
  return (
    <div className="App">
      <Header />
      {CardEle}
    </div>
  );
}

export default App;
