// import React from "react";
// import { Link } from "react-scroll";

// const Nav = () => {
//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "About", label: "About" },
//     { to: "Experiences", label: "Experiences" },
//     { to: "Skills", label: "Skills" },
//     { to: "Contact", label: "Contact" },
//   ];

//   return (
//     <div className="flex justify-between items-center border ">
//       <p>박태영</p>
//       <ul className="flex justify-end">
//         {navLinks.map((link, index) => (
//           <li
//             key={index}
//             className="mr-8 p-3 hover:scale-105 transition-all duration-300 ease-in-out  hover:cursor-pointer "
//           >
//             <Link
//               spy={true}
//               to={link.to}
//               smooth={true}
//               activeClass="activeClass"
//             >
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Nav;
