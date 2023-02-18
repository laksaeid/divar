import El from "./EG";

const CardMaker = (varients) => {
  return El({
    element: "div",
    className: "p-3 border h-[170px] md:w-[45%] flex justify-between",
    child: [
      El({
        element: "div",
        className: "flex flex-col h-full justify-between",
        child: [
          El({
            element: "p",
            className: "cursor-pointer font-bold text-xl",
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
            className:'h-full w-full cursor-pointer',
            src: varients.img,
          }),
        ],
      }),
    ],
  });
};
//  <div class="w-3"></div>
export default CardMaker;
