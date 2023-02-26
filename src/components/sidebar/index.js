import Anchor from "../../library/Anchor";
import El from "../../library/EG";

const Sidebar = () => {
  return El({
    element: "div",
    className:
      "sidebar row-start-1 h-[90%] lg:w-1/4 lg:max-w-[300px] fixed mt-[64px] p-3 pr-0 overflow-y-scroll hidden lg:block",
    child: [
      El({
        element: "section",
        className: "space-y-3 border-b border-gray-300 pb-8 text-sm",
        child: [
          El({
            element: "p",
            className: " opacity-80 ",
            child: "دسته‌ها",
          }),
          El({
            element: "ul",
            className: "space-y-4",
            child: Anchor(),
          }),
        ],
      }),
      El({
        element: "section",
        child: El({
          element: "ul",
          child: [
            El({
              element: "li",
              className:
                "flex cursor-pointer items-center gap-3 border-b border-gray-300 h-14  text-xs",
              child: [
                El({
                  element: "ion-icon",
                  className: "opacity-50",
                  name: "chevron-down-outline",
                }),
                "محل",
              ],
            }),
            El({
              element: "li",
              className:
                "flex cursor-pointer items-center gap-2 border-b border-gray-300 h-14  text-xs",
              child: [
                El({
                  element: "ion-icon",
                  className: "opacity-50",
                  name: "chevron-down-outline",
                }),
                "قیمت",
              ],
            }),
            El({
              element: "li",
              className:
                "flex cursor-pointer items-center gap-2 border-b border-gray-300 h-14  text-xs",
              child: [
                El({
                  element: "ion-icon",
                  className: "opacity-50",
                  name: "chevron-down-outline",
                }),
                "وضعیت آگهی",
              ],
            }),
          ],
        }),
      }),
      El({
        element: "section",
        className: "",
        child: [
          El({
            element: "div",
            className: "flex flex-wrap gap-3 text-sm pt-5 px-1 w-full ",
            child: [
              El({
                element: "a",
                className: "opacity-50 hover:opacity-100 transition",
                href: "/",
                child: "درباره‌ی دیوار",
              }),
              El({
                element: "a",
                className: "opacity-50 hover:opacity-100 transition",
                href: "/",
                child: "دریافت برنامه",
              }),
              El({
                element: "a",
                className: "opacity-50 hover:opacity-100 transition",
                href: "/",
                child: "بلاگ دیوار",
              }),
              El({
                element: "a",
                className: "opacity-50 hover:opacity-100 transition",
                href: "/",
                child: "کسب‌و‌کارها",
              }),
              El({
                element: "a",
                className: "opacity-50 hover:opacity-100 transition",
                href: "/",
                child: "پشتیبانی و قوانین",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex gap-8 h-12 justify-center items-center",
            child: [
              El({
                element: "ion-icon",
                name: "logo-twitter",
                className:
                  "opacity-60 hover:opacity-100 cursor-pointer transition",
              }),
              El({
                element: "ion-icon",
                name: "logo-youtube",
                className:
                  "opacity-60 hover:opacity-100 cursor-pointer transition",
              }),
              El({
                element: "ion-icon",
                name: "logo-linkedin",
                className:
                  "opacity-60 hover:opacity-100 cursor-pointer transition",
              }),
              El({
                element: "ion-icon",
                name: "logo-xbox",
                className:
                  "opacity-60 hover:opacity-100 cursor-pointer transition",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex w-full h-24 overflow-hidden",
            child: [
              El({
                element: "img",
                className: "cursor-pointer w-[32%]",
                src: "./src/assets/img/4.jfif",
              }),
              El({
                element: "img",
                className: "cursor-pointer w-[32%]",
                src: "./src/assets/img/2.png",
              }),
              El({
                element: "img",
                className: "cursor-pointer w-[32%]",
                src: "./src/assets/img/3.png",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default Sidebar;
