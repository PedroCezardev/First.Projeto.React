import "./Perfil.css";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import imagem from "../../assets/header.png";

function Perfil() {
  return (
    <section>
      <nav>
        <section className="navbar">
          <div className="logo">
            <div className="icon">
              <IoSchoolSharp />
            </div>
            <h2>Primeiro Projeto</h2>
          </div>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre ODS</Link>
            <Link to="/Perfil">Perfil do Desenvolvedor</Link>
            <Link to="/contact">Contato</Link>
          </div>

          <div className="login">
            <button className="Login-button">Login</button>
            <button className="Entrar-button">Sign Up</button>
          </div>
        </section>
      </nav>

      <header className="container">
        <div className="content">
          <pan className="blur"></pan>
          <pan className="blur"></pan>
          <h1>
            Olá, eu sou <span>Pedro Cezar</span>, Programador Full-Stack
          </h1>
          <p>
            Olá meu nome é Pedro Cezar, sou programador Full-Stack. Desenvolvo
            projetos, tanto em códigos da interface (Front-end), quanto em
            códigos por trás dos projetos (Back-end). Aqui no meu portfolio
            programado, você pode ver e analisar projetos que eu desenvolvi e
            armazenei em meu Github.
          </p>
          <button className="btn">Iniciar</button>
        </div>
        <div className="image">
          <img className="image" src={imagem} alt="" />
        </div>
      </header>

      <section className="container">
        <h2 className="titulo">Minhas Experiencias</h2>
        <div className="skill-items">
          <div className="item">
            <div className="icon">
              <i className="bx bxl-java"></i>
            </div>
            <h4>Linguagem Progamação Java</h4>
            <p>
              Comecei no universo da programção aprendendo a linguagem Java,
              após 1 semestre estudando na Universidade, me dediquei e consegui
              ser monitor em Programação Imperativa, ajudei meus colegas de
              classe a melhorarem em sua lógica de programação.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              
              <i className="bx bxl-figma"></i>
            </div>
            <h4>UI & UX Design</h4>
            <p>
              No primeiro semestre da universidade fui apresentado o Design de
              telas Interativas, onde fui desafiado a desenvolver designs de
              sites e aplicativos como resolução de problemas. Desenvolvi
              Habilidades com o design e hoje desenvolvo designs avançados de
              aplicativos e sites usando o Figma.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bxl-javascript"></i>
            </div>
            <h4>Desenvolvimento Web</h4>
            <p>
              Uma área que eu também acho muito interessante e amo programar, é
              o nomeado Front-end, desenvolvo páginas web completamente
              intuitivas e interativas, com designes inéditos.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bxs-data"></i>
            </div>
            <h4>Banco de dados</h4>
            <p>
              Fui aprensentado também na faculdade e gostei muito de trabalhar
              nessa área, tratamento de dados é muito importante em uma empresa.
              Desenvolvi a habilidade em programar banco de dados e em
              tratamento de dados.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bxs-bookmarks"></i>
            </div>
            <h4>Engenharia de Software</h4>
            <p>
              Como dito anteriormente, já desenvolvi projetos e todos eles
              precisou da Engenharia de Software, a comunicação com o cliente
              para atender as suas necessidades e documentação, que em
              praticamente todos os meus projetos, eu também escrevi.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bxl-git"></i>
            </div>
            <h4>Git e Github</h4>
            <p>
              Como você já deve saber, construir alguns projetos e para hospedar
              as aplicações na nuvem, eu ultilizava a ferramenta Git, que é
              bastante famosa na área de programação. Na nuvem, eu utilizo
              plataformas como Github, Vercel e Railway.
            </p>
          </div>
        </div>
      </section>

{/* footer */}
      <footer className="footer">
        <div className="top">
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

export default Perfil;
