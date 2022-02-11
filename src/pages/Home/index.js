import { useState } from 'react';
import { FiLink } from 'react-icons/fi'

import Menu from '../../components/Menu'
import ShortedLinkModal from '../../components/ShortedLinkModal';
import api from '../../services/api'
import { saveLink } from '../../services/storeLinks';

import './home.css'

function Home() {
  const [link, setLink] = useState('')
  const [showShortedLinkModal, setShowShortedLinkModal] = useState(false)
  const [shortedLinkData, setShortedLinkData] = useState({})

  const handleShortLink = async () => {
    api.post('/shorten', {
      long_url: link
    })
    .then(res => {
      setShortedLinkData(res.data)
      setShowShortedLinkModal(true)
      saveLink('@shortenLinks', res.data)
      setLink('')
    })
    .catch(() => {
      alert('Ops parece que algo deu errado!')
      setLink('')
    })
  }

  return (
    <div className="home">

      <div className="home__logo">
        <img src="/logoDefault.png" alt="Sujeito Logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="home__input">
        <div>
          <FiLink size={24} color='#fff'/>
          <input 
            placeholder='Cole seu link aqui...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Gerar Link</button>
      </div>

      <Menu/>

      { showShortedLinkModal && (
        <ShortedLinkModal 
          closeShortedLinkModal={() => setShowShortedLinkModal(false)}
          content={shortedLinkData}
        />
      )}
    </div>
  );
}

export default Home;
 