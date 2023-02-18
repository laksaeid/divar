import Navbar from "./components/header";
import Container from "./layouts/container/index";
import El from "./library/EG";

const App = () => {
  const app = El({
    element: 'div',
    child:[Container(Navbar())]
  })
  return app;
}

export default App;