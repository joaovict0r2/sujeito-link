import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './menu.css'

function Menu() {
  return (
    <div className="menu">
      <a className='menu__social' href="#">
        <BsYoutube  color='#fff' size={24}/>
      </a>
      <a className='menu__social' href="#">
        <BsInstagram  color='#fff' size={24}/>
      </a>

      <Link className='menu__mylinksButton' to="/mylinks">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
