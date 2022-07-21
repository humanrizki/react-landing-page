import './index.css'
import React from 'react'
import Header from './Components/Partials/Header';
import Main from './Components/Layouts/Main';
import Footer from './Components/Partials/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
function App() {
  const [toogleMenu, setToogleMenu] = React.useState(false)
  return (
    <div className="App">
      <Header setToogleMenu={setToogleMenu} toogleMenu={toogleMenu}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
