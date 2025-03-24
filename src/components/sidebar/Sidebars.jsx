import './sidebar.css'

const Sidebars = () => {
  return (
    <div className='sidebar'>
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="sidebar-image.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'> 
        <li className='sidebarListItem'>Life</li>
        <li className='sidebarListItem'>Music</li>
        <li className='sidebarListItem'>Style</li>
        <li className='sidebarListItem'>Sports</li>
        <li className='sidebarListItem'>Tech</li>
        <li className='sidebarListItem'>Cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <div className='sidebarSocial'>
        <li className="sidebarIcon"><ion-icon name="logo-facebook"></ion-icon></li>
        <li className="sidebarIcon"><ion-icon name="logo-instagram"></ion-icon></li>
        <li className="sidebarIcon"><ion-icon name="logo-pinterest"></ion-icon></li>
        <li className="sidebarIcon"><ion-icon name="logo-twitter"></ion-icon></li>
        </div>
      </div>

    </div>
  )
}

export default Sidebars
