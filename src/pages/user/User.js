import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import useObj from "../../useObj";
import "./User.css"
import perfil from '../../png/perfil.png'

function User() {
  const { obj } = useObj();

  return (
    <>
      <Navbar />
      <div className="user">
        <div className="card-user-info">
          <div className="info">
            <img src={perfil} width='100' alt=""/>
            <div className="info-text">
              <h2>{obj.name}</h2>
              <label style={{color: '#e289a1'}}>Idade: </label> <label>{obj.age} anos</label><p></p>
              <label style={{color: '#e289a1'}}>Email: </label> <label>{obj.email}</label><p></p>
              <label style={{color: '#e289a1'}}>Nome de Usuário: </label> <label>{obj.username}</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default User;
