import "./App.css";
import PopExit from "./components/PopExit/PopExit.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Column from "./components/Column/Column.jsx";


function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header />

        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                
                <Column title={"Без статуса"}/>

                <Column title={"Нужно сделать"}/>

                <Column title={"В работе"}/>

                <Column title={"Тестирование"}/>

                <Column title={"Готово"}/>
              </div>
            </div>
          </div>
        </main>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
