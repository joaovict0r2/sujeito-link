import { FiX, FiClipboard } from 'react-icons/fi'

import './shortedLinkModal.css'

function ShortedLinkModal({ closeShortedLinkModal, content }) {
  const copyLink = async () => {
    await navigator.clipboard.writeText(content.link)
    alert('URL Copiada com sucesso!')
  }

  return (
    <div className="modal">
      <div className="modal__header">
        <h2>Link Encurtado</h2>
        <button onClick={closeShortedLinkModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>
        {content.long_url}
      </span>

      <button className='modal__shorted-link' onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color="#fff"/>
      </button>
    </div>
  )
}

export default ShortedLinkModal;