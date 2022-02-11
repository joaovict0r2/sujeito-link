import { useEffect, useState } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { getSavedLinks, deleteLink } from '../../services/storeLinks';
import ShortedLinkModal from '../../components/ShortedLinkModal'

import './links.css'

function Links() {
  const [myLinks, setMyLinks] = useState([])
  const [data, setData] = useState({})
  const [showShortedLinkModal, setShowShortedLinkModal] = useState(false)
  const [emptyList, setEmptyList]= useState(false)

  useEffect(() => {
    async function getLinks(){
      const result = await getSavedLinks('@shortenLinks')

      if(result.length === 0){
        setEmptyList(true)
      }

      setMyLinks(result)
    }

    getLinks()
  }, [])

  const handleOpenLink = (link) => {
    setData(link)
    setShowShortedLinkModal(true)
  }

  const handleDeleteLink = async (id) => {
    const result = await deleteLink(myLinks, id)

    if(result.length === 0){
      setEmptyList(true)
    }

    setMyLinks(result)
  }

  return (
    <div className='links'>
      <div className='links__header'>
        <Link to='/'>
          <FiArrowLeft  size={38} color='#fff'/>
        </Link>
        <h1>Meus Links</h1>
      </div>

      { emptyList && (
        <div className='links__item'>
          <h2 className="item__empty-text">
            Sua lista está vazia...
          </h2>
        </div>
      )}

      { myLinks.map( link => (
        <div key={link.id} className="links__item">
          <button className='item__button' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color='#fff'/>
            {link.long_url}
          </button>
          <button className='item__svgDelete' onClick={() => handleDeleteLink(link.id)}>
            <FiTrash size={24} color='#ff5454'/>
          </button>
        </div>
      ))}

      { showShortedLinkModal && (
        <ShortedLinkModal 
          closeShortedLinkModal={() => setShowShortedLinkModal(false)}
          content={data}
        />
      )}
    </div>
  );
}

export default Links;
