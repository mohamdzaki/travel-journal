import "./App.css";
import experienceData from "./ExperienceData";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const CardEle = experienceData.map((experience) => {
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
