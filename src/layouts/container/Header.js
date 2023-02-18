import El from "../../library/EG";

const Header = (child) => {
  return (El({
    element: 'div',
    className: 'mx-auto p-3 fixed w-full bg-white z-20',
    child,
  }) );
}
 
export default Header;