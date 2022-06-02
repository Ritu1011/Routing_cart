// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ThemeButton } from "../ThemeButton";
// import { ThemeContext } from "../ThemeContext";
// import "./Style.css"
// const Navbar = () => {
//   const activeStyle = { color: "red", textDecoration: "none" };
//   const {darkMode}=useContext(ThemeContext)
//   return (
//     <>
//     <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
//         <NavLink className="link"
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//         to="/"
//       >
//         Home
//       </NavLink>
//       <NavLink className="link"
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//         to="/Men"
//       >
//         Men
//       </NavLink>
//       <NavLink className="link"
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//         to="/Women"
//       >
//         Women
//       </NavLink>
//       <NavLink className="link"
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//         to="/about"
//       >
//         About
//       </NavLink>
//       <NavLink className="link"
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//         to="/contact"
//       >
//         Contact US
//       </NavLink>
//       <NavLink className="link"
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//         to="/cart"
//       >
//     Cart
//       </NavLink>

//       <NavLink className="link"
//         style={({ isActive }) => (isActive ? activeStyle : undefined)}
//         to="/login"
//       >
//         Login
//       </NavLink>

      
//     </nav>
//     <ThemeButton/>
//     </>
    
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Style.css"
const Navbar = () => {
  const activeStyle = { color: "red", textDecoration: "none" };
  
  return (
    <>
    <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <NavLink className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/Men"
      >
        Men
      </NavLink>
      <NavLink className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/Women"
      >
        Women
      </NavLink>
      <NavLink className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/about"
      >
        About
      </NavLink>
      <NavLink className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/contact"
      >
        Contact US
      </NavLink>
      <NavLink className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/cart"
      >
    Cart
      </NavLink>

      <NavLink className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/login"
      >
        Login
      </NavLink>

      
    </nav>
    
    </>
    
  );
};

export default Navbar;