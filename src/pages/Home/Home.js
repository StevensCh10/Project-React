import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import useObj from "../../useObj";
import "./Home.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import customStyles from './ModalStyle'

async function addProjeto(data) {
  return fetch(`http://localhost:8080/project`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    /* .then(data => console.log(typeof data)) */
    .catch(err => console.log(err))
 }

function Home() {
  const { obj } = useObj();
  const [pName, setPName] = useState("")
  const [pDescription, setPDescription] = useState("")
  const [projects, setProjects] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const auxName = document.getElementById('name')
  const auxDescription = document.getElementById('description')
  
  const colorBorder = (situation) => {
    if (situation) {
      return "2px solid #05ff8a";
    } else {
      return "2px solid red";
    }
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const handleSubmit = async e => {
    const newProject = {
      name: pName,
      description: pDescription,
      situation: false,
      user: {
        id: obj.id
      }
    }
    await addProjeto(newProject)
    window.location.reload()
  }

  const handleValidation = (e) => {
    e.preventDefault()
    if(pName === "" || pDescription === "") {
      document.getElementById('emptyInput').textContent = 'Preencha todos os campos !'
      auxName.value = ""
      setPName("")
      auxDescription.value = ""
      setPDescription("")
      auxName.focus()
    }else{
      handleSubmit(e);
    }
  }

  useEffect(() => {
    if (!obj || obj === undefined) {
      window.location.href = "/";
    } else {
      const getProjects = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/project/userProjects/${obj.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const responseData = await response.json();
          setProjects(responseData);
        } catch (err) {
          console.log(err);
        }
      };
      getProjects();
    }
  }, [setProjects, obj]);

  return (
    <>
      <Navbar />
      <div className="home" id="home">
        <div className="card-create-project">
          <button onClick={handleOpenModal}>
            +
          </button>
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            styled={customStyles}>
            <div className="info-modal">
              <button className="close-modal" onClick={handleCloseModal}> X </button>
              <form className="card" onSubmit={handleValidation}>
                <div className="card-header">
                  <h2>Adicionar Projeto</h2> <label id="emptyInput"></label>
                </div>
                <div className="card-content">
                  <div className="card-content-area">
                    <label>Nome</label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setPName(e.target.value)}
                    />
                  </div>
                  <div className="card-content-area">
                    <label>Descrição</label>
                    <input
                      type="text"
                      id="description"
                      onChange={(e) => setPDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="submit">
                    Criar
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        <div className="card-projects">
          <ul>
            {projects.map((p) => (
              <div
              className="card-project-info"
              style={{ border: colorBorder(p.situation) }}>
                <button className='delete-item'>X</button>
                <li key={p.id} className='itens'> 
                  {p.name}
                  <div className="description">
                    -{p.description}
                  </div> 
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
