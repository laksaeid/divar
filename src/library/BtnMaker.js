import El from "./EG";
const styles = {
  noBg: 'py-1 px-3 flex items-center gap-2 opacity-60',
  redBg :'py-1 px-3 flex items-center gap-2 opacity-60 bg-red-600'
}
const BtnMaker = (text,icon,styles) => {
  if (icon && icon !== 'i') {
    return El({
      element: 'button',
      className: styles,
      child: [El({
        element: 'ion-icon',
        className: 'text-lg',
        name: icon
      }), El({
        element: 'p',
        child: text
      }),]
    })
  } else if (icon === "i") {
    return El({
      element: 'button',
      className: styles,
      child:El({
        element: 'p',
        child: text
      })
    })
  } else {
    return El({
      element: 'button',
      className: styles,
      child:[El({
        element: 'p',
        innerHTML: text
      }), El({
        element: 'ion-icon',
        name:'chevron-down-outline'
      })]
    })
  };
}
 
export default BtnMaker;