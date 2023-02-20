import BtnMaker from "../../library/BtnMaker";
import El from "../../library/EG";

const Header = (child) => {
  return (El({
    element: 'header',
    className: 'mx-auto p-3 fixed w-full bg-white z-20 border-b',
    child:child,
  }) );
}
 
export default Header;