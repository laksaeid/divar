import El from "./EG";
const Li = [
  { icon: "home-outline", name: "املاک" },
  { icon: "car-sport-outline", name: "وسایل نقلیه" },
  { icon: "phone-portrait-outline", name: "کالای دیجیتال" },
  { icon: "shirt-outline", name: "خانه و آشپزخانه" },
  { icon: "construct-outline", name: "خدمات" },
  { icon: "watch-outline", name: "وسایل شخصی" },
  { icon: "dice-outline", name: "سرگرمی و فراغت" },
  { icon: "people-outline", name: "اجتماعی" },
  { icon: "business-outline", name: "تجهیزات و صنعتی" },
  { icon: "briefcase-outline", name: "استخدام و کاریابی" },
];

const Anchor = () => {
  const items = [];
  Li.forEach((item) => {
    const newItem = El({
      element: "li",
      child: El({
        element: "a",
        className: "flex gap-2 items-center w-max opacity-80 hover:opacity-100 transition duration-300 cursor-pointer" ,
        child: [
          El({
            element: "ion-icon",
            className:'text-xl',
            name: item.icon,
          }),
          item.name,
        ],
      }),
    });
    items.push(newItem);
  });
  return items;
};

export default Anchor;
