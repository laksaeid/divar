import BtnMaker from "../../library/BtnMaker";
import El from "../../library/EG";
const styles = {
  noBg: "w-20 gap-2 justify-center items-center font-medium text-sm opacity-75 hover:bg-gray-100 transition rounded-[5px] hidden lg:flex",
  redBg:
    "text-white font-semibold hover:bg-red-700 transition rounded-[5px] bg-red-800 w-24 hidden lg:block",
};
const Navbar = () => {
  return El({
    element: "div",
    className: "lg:flex justify-between w-full lg:max-w-7xl lg:px-3 mx-auto",
    child: [
        El({
            element: "div",
            className:'lg:flex gap-4 ',
            child:[El({
                element: "div",
                className: "flex hidden lg:inline-flex",
                child: [
                  El({
                    element: "img",
                    className: "hidden lg:block h-10",
                    src: "./src/assets/img/download.svg",
                  }),
                  El({
                    element: "div",
                    className: "bg-gray-400 self-center w-px h-[20px] mr-4 ml-2",
                  }),
                  BtnMaker("تهران", "location-outline", styles.noBg),
                ],
              }),
              BtnMaker("دسته ها", undefined, styles.noBg),
              El({
                element: "div",
                className: "bg-gray-100 p-1 h-18 flex justify-between lg:w-96 px-2",
                child: [
                  El({
                    element: "div",
                    className: "flex items-center w-full gap-3",
                    child: [
                      El({
                        element: "ion-icon",
                        className: "md hydrated opacity-75 text-xl",
                        name: "search-outline",
                      }),
                      El({
                        element: "input",
                        placeholder: "جست و جو در همه آگهی ها",
                        className: "bg-inherit outline-0 flex-grow",
                      }),
                    ],
                  }),
                  El({
                    element: "div",
                    className: "flex items-center gap-2 opacity-50",
                    child: [
                      El({
                        element: "p",
                        className: "text-2xl font-thin lg:hidden",
                        child: "|",
                      }),
                      El({
                          element: "p",
                          className: 'lg:hidden',
                        innerText: "تهران",
                      }),
                      El({
                        element: "ion-icon",
                        className: "md hydrated text-xl lg:hidden",
                        name: "location-outline",
                      }),
                    ],
                  }),
                ],
              })]
      }),
        El({
            element: "div",
            className: "flex gap-4",
            child:[BtnMaker("دیوار من", 'person-outline', styles.noBg),
            BtnMaker("چت","chatbox-outline", styles.noBg),BtnMaker('پشتیبانی',"i", styles.noBg),BtnMaker('ثبت آگهی','i',styles.redBg)]
        })
    ],
  });
};

export default Navbar;
