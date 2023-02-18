import El from "../../library/EG";

const Container = (child) => {
  return (El({
    element: 'div',
    className: 'mx-auto p-3',
    child,
  }) );
}
 
export default Container;