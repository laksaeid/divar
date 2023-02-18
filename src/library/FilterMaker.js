import El from "../library/EG";

const NewFilter = (mtn,icon) => {
  if (icon) {
    return El({
      element: 'div',
      className: "cursor-pointer gap-1 flex border p-2 opacity-50 rounded-full justify-center items-center",
      child: [El({
          element: "ion-icon",
          className: "",
          name: icon,
        }),El({
          element: "p",
          className: "text-sm truncate",
          child: mtn,
        })
      ]
    })
  } else {
    return (El({
  element: "div",
className:
  "cursor-pointer flex border p-2 opacity-50 rounded-full justify-center items-center",
child: El({
  element: "p",
  className: " text-sm truncate",
  child: mtn,
})
}) );
  }

}
 
export default NewFilter;

// return (El({
//   element: "div",
// className:
//   "flex border p-1 opacity-50 rounded-full justify-center items-center",
// child: El({
//   element: "p",
//   className: "mb-[2px] truncate",
//   child: mtn,
// })
// }) );