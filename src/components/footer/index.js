import El from "../../library/EG";

const Footer = () => {
  return El({
    element: "div",
    className:'flex ',
    className: "flex h-16 border-t bg-white w-full bottom-0 fixed",
    child: [
      El({
        element: "div",
        className:'flex flex-col justify-center items-center w-full',
        child:[
          El({
            element: "img",
            className: 'w-7 cursor-pointer',
            src: "./src/assets/img/download.svg",
          }),
          El({
            element: "p",
            className:'text-red-700 text-sm cursor-pointer',
            child: "آگهی‌ها",
          }),
        ]
      }),
      El({
        element: "div",
        className:'flex opacity-60 gap-1 flex-col justify-center items-center w-full',
        child:[
          El({
            element: "ion-icon",
            className:'text-2xl cursor-pointer',
            name:'list-outline',
          }),
          El({
            element: "p",
            className:'text-sm cursor-pointer',
            child: "دسته‌ها",
          }),
        ]
      }),
      El({
        element: "div",
        className:'flex opacity-60 gap-1 flex-col justify-center items-center w-full',
        child:[
          El({
            element: "ion-icon",
            className:'text-2xl cursor-pointer',
            name:'add-circle',
          }),
          El({
            element: "p",
            className:'text-sm cursor-pointer',
            child: "ثبت آگهی",
          }),
        ]
      }),
      El({
        element: "div",
        className:'flex opacity-60 gap-1 flex-col justify-center items-center w-full',
        child:[
          El({
            element: "ion-icon",
            className:'text-2xl cursor-pointer',
            name:'chatbox'
          }),
          El({
            element: "p",
            className:'text-sm cursor-pointer',
            child: "چت",
          }),
        ]
      }),
      El({
        element: "div",
        className:'flex opacity-60 gap-1 flex-col justify-center items-center w-full',
        child:[
          El({
            element: "ion-icon",
            className:'text-2xl cursor-pointer',
            name: 'person'
          }),
          El({
            element: "p",
            className:'text-sm cursor-pointer',
            child: "دیوار من",
          }),
        ]
      }),
     
      
    ],
  });
};

export default Footer;
