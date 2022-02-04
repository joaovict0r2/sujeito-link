import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './links.css'

function Links() {
  return (
    <div className='links'>
      
      <div className='links__header'>
        <Link to='/'>
          <FiArrowLeft  size={38} color='#fff'/>
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links__item">
        <button className='item__button'>
          <FiLink size={18} color='#fff'/>
          https://meulink.com
        </button>
        <button className='item__svgDelete'>
          <FiTrash size={24} color='#ff5454'/>
        </button>
      </div>

      <div className="links__item">
        <button className='item__button'>
          <FiLink size={18} color='#fff'/>
          https://meulink.com
        </button>
        <button className='item__svgDelete'>
          <FiTrash size={24} color='#ff5454'/>
        </button>
      </div>

    </div>
  );
}

export default Links;
