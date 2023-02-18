import "./src/styles/index.css"
import App from './src/App';
const root = document.getElementById("app");



// const h1 = El({
//   element: "h1",
//   className: "bg-red-500",
//   child: [
//     El({
//       element: "span",
//       child: "Click on ",
//     }),
//     El({
//       element: "a",
//       href: "/",
//       child: "link",
//     }),
//     El({
//       element: "h2",
//       child: "test",
//     }),
//   ],
// });

root.append(App());
