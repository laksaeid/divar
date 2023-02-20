import El from "../../library/EG";

const Container = (...child) => {
  return (El({
    element: 'div',
    className: 'mx-auto h-screen p-3 lg:max-w-7xl',
    child:child
  }) );
}
 
export default Container;