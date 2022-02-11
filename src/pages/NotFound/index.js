import { Link } from 'react-router-dom';

import './notFound.css'

function NotFound() {
  return (
    <div className="notfound">
      <img src="notfound.png" alt="Not Found Error" />
      <h1>Página não encontrada!</h1>
      <Link to="/">
        Voltar para home
      </Link>
    </div>
  )
}

export default NotFound;