import El from "../../library/EG";

const Main = (child) => {
  return (El({
    element: 'main',
    className: '',
    child,
  }) );
}
 
export default Main;