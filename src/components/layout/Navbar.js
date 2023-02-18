import { Link } from "react-router-dom";
import "./Navbar.css";
//Importar LOGO


function Navbar() {
  
  const handleLogOff = () => {
    localStorage.clear();
    window.location.href = '/'
  }

  return (
    <nav className='navbar'>
      <Link to="/home" className='logo'>
        PersonalProjects
      </Link>
      <ul className='list'>
        <li className='item'>
          <Link to="/home">Home</Link>
        </li>
        <li className='item'>
          <Link to="/user">Usuário</Link>
        </li>
        <li className='item'>
          <Link onClick={handleLogOff}>Sair</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
