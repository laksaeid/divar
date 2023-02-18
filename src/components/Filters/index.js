import El from "../../library/EG";
import NewFilter from "../../library/FilterMaker";
const Filters = () => {
  return El({
    element: "div",
    className: 
      "filters bg-white fixed mt-16 h-14 z-20 px-3 border-t-2 gap-3 overflow-x-scroll w-screen border-b-2 flex items-center ",
    child: [
      NewFilter('فیلتر‌ها', 'options-outline'),
      NewFilter('دسته‌ها', 'list-outline'),
      NewFilter('خودرو سواری'),
      NewFilter('فروش آپارتمان'),
      NewFilter('اجاره آپارتمان'),
      NewFilter('موبایل'),
      NewFilter('صندلی و نیمکت'),
      NewFilter('حیوانات'),
      NewFilter('وسایل شخصی'),
      NewFilter('خدمات'),
      NewFilter('استخدام'),
      NewFilter('تلویزیون'),
    ],
  });
};

export default Filters;


// El({
//   element: "div",
//   className:
//     "flex border py-1 px-2  opacity-50 rounded-full justify-center items-center",
//   child: [
//     El({
//       element: "ion-icon",
//       className: "",
//       name: "options-outline",
//     }),
//     NewFilter('فیلترها'),
//   ],
// }),
// El({
//   element: "div",
//   className:
//     "flex border py-1 px-2 opacity-50 rounded-full justify-center items-center",
//   child: [
//     El({
//       element: "ion-icon",
//       className: "",
//       name: "options-outline",
//     }),
//     NewFilter('دسته‌ها'),
//   ],
// }),
// NewFilter('خودروسواری'),
// NewFilter('فروش آپارتمان'),
// NewFilter('اجاره آپارتمان'),
// NewFilter('موبایل'),
// NewFilter('صندلی و نیمکت'),
// NewFilter('حیوانات'),