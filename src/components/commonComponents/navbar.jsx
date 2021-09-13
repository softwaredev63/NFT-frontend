import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="container">
      {showMenu && <div className="backdraw" onClick={() => setShowMenu(!showMenu)}></div> }

        <div className="main-logo"></div>
        <div className="item-container">
          <div className="search-box">
            <div className="search-bar-svg-container">
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path></svg>
            </div>
            <input className="search-box-input" placeholder="Search by creator, collectible or collection"></input>
          </div>
          <div className="explore nav-item"><Link to='/'>Explore</Link></div>
          <div className="my-items nav-item"><Link to='/items'>MY items</Link></div>
          <div className="following nav-item"><Link to='/following'>Following</Link></div>
          <div className="activity nav-item"><Link to='/activity'>Activity</Link><div class="new-item"><svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" width="29" height="14" rx="7" fill="url(#paint0_radial)"></rect><path d="M11.044 10V4.328H9.78V7.776L7.652 4.328H6.116V10H7.372V6.272L9.708 10H11.044ZM15.8644 10V8.8H13.5284V7.712H15.6404V6.6H13.5284V5.52H15.8564V4.328H12.2644V10H15.8644ZM22.3676 7.968L21.1916 4.328H19.8956L18.7196 7.96L17.7836 4.328H16.4396L17.9836 10H19.3116L20.5276 6.24L21.7356 10H23.0396L24.5836 4.328H23.2876L22.3676 7.968Z" fill="white"></path><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.6167 -5.6875) rotate(24.662) scale(36.6973 39.3316)"><stop stop-color="#0C50FF"></stop><stop offset="0.557292" stop-color="#5B9DFF"></stop><stop offset="1" stop-color="#FF74F1"></stop></radialGradient></defs></svg></div></div>
          <div className="following nav-item"><Link to='/howitworks'>How it works</Link></div>
          <div className="following nav-item" onClick={() => setShowMenu(!showMenu)}>Community
          {showMenu &&
              <div className="nav-menu-dropdown">
                <div className="nav-menu-inner-container">
                  <div className="nav-menu-dropdown-community-box">
                    <div className="community-dropdown-button-container">
                      <Link className="community-dropdown-link">RARI Token</Link>
                      <Link className="community-dropdown-link">Discussion</Link>
                      <Link className="community-dropdown-link">Voting</Link>
                      <Link className="community-dropdown-link">Suggest feature</Link>
                      <Link className="community-dropdown-link">Subscribe</Link>
                    </div>
                    <div className="community-dropdown-bottom-line"></div>
                    <div className="community-dropdown-bottom-social">
                      <a href="" className="socail-link social-link-1"><svg viewBox="0 0 18 16" fill="none" width="18" height="18" xlmns="http://www.w3.org/2000/svg"><path d="M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z" fill="currentColor"></path></svg></a>
                      <a href="" className="socail-link social-link-2"><svg viewBox="0 0 16 14" fill="none" width="17" height="17" xlmns="http://www.w3.org/2000/svg"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg></a>
                      <a href="" className="socail-link social-link-3"><svg viewBox="0 0 16 14" fill="none" width="17" height="17" xlmns="http://www.w3.org/2000/svg"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg></a>
                      <a href="" className="socail-link social-link-4"><svg viewBox="0 0 16 14" fill="none" width="17" height="17" xlmns="http://www.w3.org/2000/svg"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg></a>
                      <a href="" className="socail-link social-link-5"><svg viewBox="0 0 16 14" fill="none" width="17" height="17" xlmns="http://www.w3.org/2000/svg"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg></a>
                      <a href="" className="socail-link social-link-6"><svg viewBox="0 0 16 14" fill="none" width="17" height="17" xlmns="http://www.w3.org/2000/svg"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg></a>

                    </div>
                  </div>
                </div>
              </div>
            }
          </div>

          <div className="nav-btn-blue nav-item"><Link to='/create'>Create</Link></div>
          <div className="nav-btn nav-item">
            <Link to='/connect'>Connect wallet</Link>
          </div>
        </div>
      </div>
    </>
  )
};
export default Navbar;
