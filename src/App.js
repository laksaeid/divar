import Filters from "./components/Filters";
import Footer from "./components/footer";
import Navbar from "./components/header";
import Cards from "./components/main";
import Header from "./layouts/container/Header";
import Container from "./layouts/container/index";
import Main from "./layouts/main";
import El from "./library/EG";

const App = () => {
  const app = El({
    element: 'div',
    className: '',
    child:[Header(Navbar()),Filters(),Container(Main(Cards())),Footer()]
  })
  return app;
}

export default App;