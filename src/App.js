import Filters from "./components/Filters";
import Footer from "./components/footer";
import Navbar from "./components/header";
import Cards from "./components/main";
import Sidebar from "./components/sidebar";
import Header from "./layouts/container/Header";
import Container from "./layouts/container/index";
import Main from "./layouts/main";
import El from "./library/EG";

const App = () => {
  const app = El({
    element: 'div',
    className: 'h-screen',
    child:[Header(Navbar()),Filters(),Container(Main(Cards(),Sidebar())),Footer()]
  })
  const width = document.body.clientWidth;
  console.log(width);
  return app
  // if (width < 1000)
  // window.addEventListener('resize', () => {
  //   if (document.body.clientWidth < 1000) {
  //     return app;
  //   }
  //   console.log();
  // })
}

export default App;