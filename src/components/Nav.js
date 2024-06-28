import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    })
    
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };


  return (
    <nav className={`nav ${show && 'nav__black'}`}>
        <img 
            alt='Netflix logo'
            src='https://cdn-icons-png.flaticon.com/512/5977/5977590.png'
            className='nav__logo'
            onClick={() => window.location.reload()}
        />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
      />



        <img 
            alt='User logged'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
            className='nav__avatar'
        />
    </nav>
  )
}

export default Nav