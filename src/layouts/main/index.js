import El from "../../library/EG";

const Main = (...child) => {
  return (El({
    element: 'main', 
    className: 'lg:grid grid-cols-4',
    child,
  }) );
}
 
export default Main;