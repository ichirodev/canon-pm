import './style/colors.css';
import './App.css';

import { useRef, useState } from 'react';
import { MdAccountCircle, MdDarkMode, MdLibraryAdd, MdLightMode, MdLogout, MdKeyboardBackspace } from 'react-icons/md';
import SecretsList from './pages/SecretsList/SecretsList.js';
import Creator from './pages/Creator/Creator';
import LogIn from './pages/LogIn/LogIn';

function App() {
  const [logged, setLogged] = useState(false);
  const [color, setColor] = useState("dark");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState("home");

  const searchCriteria = useRef(null);
  
  const topBarIconSize = 24;

  const invertColorTheme = () => {
    setColor(color === "dark" ? "light" : "dark");
  }
  
  const submitSearchCriteria = event => {
    event.preventDefault();
    setFilter(searchCriteria.current.value);
  }

  function renderLogInPage() {
    return (
      <LogIn/>
    );
  }

  function renderPageContent(_page) {
    switch (_page) {
      case "home":
        return renderHome();
      
      case "creator":
        return renderCreator();
      
      default:
        return renderNotFound();
      
    }
  }

  function renderPageActions(_page) {
    switch (_page) {
      case "home":
        return(
          <>
          <button className={"round-button " + color + "-button"}
          onClick={() => {setPage("creator")}} >
            <MdLibraryAdd size={"30px"}/>
          </button>
          </>
        );

      case "creator":
        return(
          <>
            <button className={"round-button " + color + "-button"}
            onClick={() => {setPage("home")}} >
              <MdKeyboardBackspace size={"30px"}/>
            </button>
          </>
        );
    
      default:
        break;
    }
  }

  const renderHome = () => {
    return (
      <div className="app-content">
        <div id="search-bar" className="app-search-bar">
        <form onSubmit={submitSearchCriteria} onChange={submitSearchCriteria}>
          <input type="text" ref={searchCriteria} placeholder="Search..." className={"basic-" + color + "-text"}/>
        </form>
      </div>
      <SecretsList color={color} searchFilter={filter}/>  
      </div>   
    );
  }

  const renderCreator = () => {
    return(
      <div className="app-content">
        <Creator color={color}/>
      </div>
    );
  }

  const renderNotFound = () => {
    return <h1>Page not found</h1>
  }

  function renderApp() {
    return (
      <>
        <div className={"app-top-bar " + color + "-top-bar"}>
          <div id="canon-header-logo" className="app-top-logo">
          Canon
          </div>

          <div id="user-settings" className="app-user-settings">
            <button onClick={invertColorTheme} className={"transparent-button " + color + "-transparent-button"}>
              {color === "dark" ? <MdDarkMode size={topBarIconSize}/> : <MdLightMode size={topBarIconSize}/>}
            </button>
            <button className={"transparent-button " + color + "-transparent-button"}>
              <MdAccountCircle size={topBarIconSize}/>
            </button>
            <button className={"transparent-button " + color + "-transparent-button"}>
              <MdLogout size={topBarIconSize}/>
            </button>
          </div>
        </div>

        {renderPageContent(page)}

        <div className={"app-actions"}>
          {renderPageActions(page)} 
        </div>

        <div className={"app-footer " + color + "-footer"}>
          Footer
        </div>
      </>
    )
  }

  return (
    <div className={"app " + color + "-bg"}>
      {logged ? renderApp() : renderLogInPage()}
    </div>
  );
}

export default App;
