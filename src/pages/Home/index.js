import { FiLink } from 'react-icons/fi'
import Menu from '../../components/Menu'
import './home.css'

function Home() {
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
          />
        </div>

        <button>Gerar Link</button>
      </div>

      <Menu/>
    </div>
  );
}

export default Home;
 