import "./Sobre.css";

import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import Ods1 from "../../assets/ods.1.png";
import Ods15 from "../../assets/ods.15.png";

function Sobre() {
  return (
    <section>
      <header>
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
      </header>

      <section className="container">
        <div className="title">
          <h2>
            Vamos conhecer sobre os Objetivos de Desenvolvimento Sustentável
          </h2>
          <p className="text">
            Os Objetivos de Desenvolvimento Sustentável (ODS) são uma série de
            metas globais estabelecidas pela Organização das Nações Unidas (ONU)
            para enfrentar os desafios mais urgentes do mundo. Lançados em 2015
            como parte da Agenda 2030 para o Desenvolvimento Sustentável, os ODS
            abrangem uma ampla gama de questões, incluindo pobreza, fome, saúde,
            educação, igualdade de gênero, água limpa, energia acessível,
            trabalho decente, inovação, e mudança climática, entre outros.
          </p>
          <p className="text">
            Esses 17 objetivos foram concebidos como um plano de ação universal
            para assegurar a prosperidade para as pessoas e o planeta, hoje e no
            futuro. Eles são interconectados e abordam os três pilares do
            desenvolvimento sustentável: econômico, social e ambiental. Alcançar
            os ODS exige a colaboração de governos, setor privado, sociedade
            civil e indivíduos em nível local, nacional e global.
          </p>
        </div>

        <div className="content">
          <h2>ODS 2: Fome Zero e Agricultura Sustentável:</h2>
          <div className="group">
            <div>
              <h2>Fome Zero</h2>
              <p className="paragraph">
                O ODS Fome Zero é um dos 17 Objetivos de Desenvolvimento
                Sustentável estabelecidos pela ONU para enfrentar os desafios
                globais até 2030. Seu principal objetivo é erradicar a fome,
                alcançar a segurança alimentar, melhorar a nutrição e promover a
                agricultura sustentável. Isso envolve garantir o acesso
                universal a alimentos nutritivos, promover práticas agrícolas
                sustentáveis, investir em infraestrutura rural e garantir
                sistemas de produção de alimentos mais eficientes.
              </p>

              <h2>Agricultura Sustentável</h2>
              <p className="paragraph">
                A Agricultura Sustentável é um dos pilares dos Objetivos de
                Desenvolvimento Sustentável (ODS) estabelecidos pela Organização
                das Nações Unidas (ONU). Este objetivo visa garantir que a
                produção de alimentos seja realizada de forma a atender às
                necessidades das gerações presentes sem comprometer a capacidade
                das futuras gerações de atender às suas próprias necessidades.
              </p>
            </div>
            <img className="imagem" src={Ods1} alt="" />
          </div>

          <h2>ODS 15: Ecossistema terrestre e Biodiversidade:</h2>
          <div className="group">
            <img className="imagem" src={Ods15} alt="" />
            <div>
              <h2>Ecossistema terrestre</h2>
              <p className="paragraph">
                O Ecossistema Terrestre é um dos Objetivos de Desenvolvimento
                Sustentável (ODS) estabelecidos pela ONU para promover a
                conservação e o uso sustentável dos sistemas naturais da terra.
                Esse objetivo reconhece a importância dos ecossistemas
                terrestres para a saúde do planeta e o bem-estar humano. Os
                ecossistemas terrestres, que incluem florestas, savanas,
                desertos, montanhas e áreas agrícolas, desempenham um papel
                fundamental na regulação do clima, na purificação do ar e da
                água, na conservação da biodiversidade e na provisão de serviços
                ecossistêmicos essenciais.
              </p>

              <h2>Biodiversidade</h2>
              <p className="paragraph">
                A Biodiversidade é um dos Objetivos de Desenvolvimento
                Sustentável (ODS) estabelecidos pela Organização das Nações
                Unidas (ONU) para promover a conservação e uso sustentável da
                vida na Terra. Este objetivo reconhece a importância vital da
                diversidade biológica para o equilíbrio dos ecossistemas e para
                o bem-estar humano. A biodiversidade engloba toda a variedade de
                formas de vida, desde plantas e animais até microrganismos, e os
                ecossistemas de que fazem parte. Proteger e preservar a
                biodiversidade é essencial para garantir a provisão de serviços
                ecossistêmicos vitais, como a polinização de culturas, a
                purificação da água, a regulação do clima e a manutenção da
                segurança alimentar.
              </p>
            </div>
          </div>
        </div>

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
    </section>
  );
}

export default Sobre;
