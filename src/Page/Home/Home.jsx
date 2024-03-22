import { Link } from "react-router-dom";
import "./Home.css";
import { IoSchoolSharp } from "react-icons/io5";
import reactLogo from "../../assets/react.svg";

function Home() {
  return (
    <section>
      <header>
        <nav className="navbar">
          <div className="logo">
            <div className="icon">
              <IoSchoolSharp />
            </div>
            <h2>Primeiro Projeto React</h2>
          </div>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre ODS</Link>
            <Link to="/Perfil">Perfil do Desenvolvedor</Link>
            <Link to="/Perfil">Contato</Link>
          </div>

          <div className="login">
            <button className="Login-button">Login</button>
            <button className="Entrar-button">Sign Up</button>
          </div>
        </nav>
      </header>

      <div className="group">
        <div className="title">
          <h1>
            Leve sua experiência para o próximo nível, Conheça as Famosas ODS
          </h1>
          <p>
            Neste site você poderá comprender melhor sobre as{" "}
            <b>ODS (Objetivos de Desenvolvimento Sustentável)</b>, qual a
            importãncia e qual intuito das ODS em relação a todo o Globo. Este
            Site abordará mais profundamente sobre a ODS 2 - Fome Zero e
            Agricultura Sustentável e a ODS 15 - Ecossistema terrestre e
            Biodiversidade.
          </p>
          <div className="buttons">
            <Link to="/Sobre">
              <button className="">Iniciar nas ODS</button>
            </Link>
            <Link to="/Perfil">
              <button className="contato"> Contate-Me</button>
            </Link>
          </div>
        </div>

        <div className="img">
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react react-icon"
              alt="React logo"
            />
          </a>
        </div>
      </div>
      
      <footer>
        <div className="top" id="footer">
          <div className="logo">
            <a href="https://www.linkedin.com/in/pedro-cezar-77a444270/">
              Pedro Cezar Dev
            </a>
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre ODS</Link>
            <Link to="/Perfil">Perfil do Desenvolvedor</Link>
            <Link to="/Sobre">Contato</Link>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/_pedrodev0/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/PedroCezardev">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/pedro-cezar-77a444270/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="#">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="separator">
          <div className="bottom">
            <p> Feito por Pedro Cezar 👨🏽‍💻🔥💥 </p>
            <div className="links">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos do Serviço</a>
              <a href="#">Configurações de Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Home;
