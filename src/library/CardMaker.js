import El from "./EG";

const CardMaker = (varients) => {
  return El({
    element: "div",
    className: "p-2 border h-[150px] flex justify-between rounded-[4px]",
    child: [
      El({
        element: "div",
        className: "flex flex-col h-full justify-between",
        child: [
          El({
            element: "p",
            className: "cursor-pointer font-bold text-xl md:text-base lg:text-sm lg:font-semibold opacity-90",
            child: varients.name,
          }),
          El({
            element: "div",
            className: "opacity-50 text-xs",
            child: [
              El({
                element: "p",
                child: varients.status,
              }),
              El({
                element: "p",
                child: varients.price,
              }),
              El({
                element: "p",
                child: varients.loc,
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-1 items-end w-44",
        child: [
          El({
            element: "ion-icon",
            className:'cursor-pointer',
            name: "chatbubble-outline",
          }),
          El({
            element: "img",
            className:'h-full w-full  cursor-pointer rounded-md',
            src: varients.img,
          }),
        ],
      }),
    ],
  });
};
//  <div class="w-3"></div>
export default CardMaker;
