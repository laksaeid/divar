import CardMaker from "../../library/CardMaker";
import El from "../../library/EG";


const Cards = () => {
  return (El({
    element: 'div',
    className:'cards bg-white pb-24 mt-32 flex flex-col gap-5',
    child: [
      El({
        element: 'p',
        className: 'text-xs opacity-75',
        child:'دیوار تهران:انواع آگهی‌ها و خدمات در تهران'
      }), El({
        element: 'div',
        className:'flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center',
        child:[CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        }),CardMaker({
          name: "تشک رویال / مناسب تمام وزن ها",
          status: "نو",
          price: "3000000 تومان",
          loc: "آژانس املاک یاران مهدی در پیروزی",
          img: "./src/assets/img/1.jpg"
        })
        ]
      })
      
    ]
  }) );
}
 
export default Cards;