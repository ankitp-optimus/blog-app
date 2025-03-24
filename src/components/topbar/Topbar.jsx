import "./topbar.css";
import { Link } from "react-router-dom";
export default function Topbar() {
  const user= false;
  return (
    <div className="top">
      <div className="topLeft">
      <li className="topIcon"><ion-icon name="logo-facebook"></ion-icon></li>
      <li className="topIcon"><ion-icon name="logo-instagram"></ion-icon></li>
      <li className="topIcon"><ion-icon name="logo-pinterest"></ion-icon></li>
      <li className="topIcon"><ion-icon name="logo-twitter"></ion-icon></li>
      </div>
      <div className="topCenter">
        <ul className="topList">
         <li className="topListItem">
          <Link to="/" className="Links">HOME</Link></li>
         <li className="topListItem">
          <Link to="/about" className="Links">ABOUT</Link></li>
         <li className="topListItem">
          <Link to="/contact" className="Links">CONTACT</Link></li>
         <li className="topListItem">
          <Link to="/write" className="Links">WRITE</Link></li>
         <li className="topListItem">
          {user && 'LOGOUT'}</li> 
        </ul>
      </div>
      <div className="topRight">
        {user ? ( <img 
        className="topImg"
        src="./images.jpeg" alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
       
        <li className="topSearchIcon"><ion-icon name="search-circle-outline"></ion-icon></li>
      </div>
     </div>
  );
}