import React from 'react';
import InlineSVG from 'react-inlinesvg';
import { Helmet } from 'react-helmet';

const elementosUrl = require('../../../images/elementosicon.svg');
const asteriskUrl = require('../../../images/p5-asterisk.svg');

const images = [(asteriskUrl), (elementosUrl),];

const logoUrl = require('../../../images/new/logo2.svg');


function Passos(props) {
  return (
    <div>
      <div className="passos">

        <div className="tablet d-flex colunm a-center jc-end">
          <div className="tablet-stripe">
            <div className="flex">
              <div className="stripe-rocket">
                <span></span>
                <span></span>
              </div>  

              <div className="stripe-text">
                <p>Esse é o seu novo tablet. Vamos programar!</p>
              </div>

              <div className="stripe-rocket">
                <span></span>
                <span></span>
              </div>  
            </div>

            <div className="stripe-close">
              Fechar
            </div> 
          </div>

          <button className="btn">novo app</button>
        </div>

      </div>

      <div className="passos bg">

        <div className="tablet white d-flex colunm jc-bet a-center">
          <div className="logo">
            <InlineSVG src={logoUrl} alt="p5.js logo" />
          </div>
          <div className="text">
            <p>Primeira vez por aqui? <br/> Vamos configurar seu acesso</p>
            <button className="btn center mt20">vamos lá</button>
          </div>
          <div className="text primary">
            <p>Ou</p>
          </div>
          <div className="text">
            <p>Você já possui uma conta?</p>
            <button className="btn center mt20 white">acessar</button>
          </div>
          <button className="btn center">voltar</button>
        </div>

      </div>

      <div className="passos bg">

        <div className="tablet white d-flex colunm jc-bet a-center">
          <div className="logo">
            <InlineSVG src={logoUrl} alt="p5.js logo" />
          </div>

          <div className="form">
            <form>
              <ul>
                <li>
                  <legend>Login do(a) Inventor(a)</legend>
                </li>
                <li>
                  <input type="text" placeholder="E-mail ou nome de usuário" />
                </li>
                <li>
                  <input type="password" placeholder="Senha" />
                </li>
                <li className="d-flex a-center jc-center">
                  <a href="#" className="forget">Recuperar senha</a>
                  <button className="btn">entrar</button>
                </li>
              </ul>

            </form>
          </div>

          <div className="text">
            <p>Você não tem conta?</p>
            <button className="btn center mt20 white">Cadastre-se</button>
          </div>
        </div>

      </div>

      <div className="passos bg">

        <div className="tablet white d-flex colunm jc-bet a-center">
          <div className="logo">
            <InlineSVG src={logoUrl} alt="p5.js logo" />
          </div>

          <div className="form">
            <form>
              <ul>
                <li>
                  <legend>Cadastro do(a) Inventor(a)</legend>
                </li>
                <li>
                  <input type="text" placeholder="E-mail" />
                </li>
                <li>
                  <input type="text" placeholder="Senha" />
                </li>
                <li>
                  <input type="password" placeholder="Confirmar a Senha" />
                </li>
                <li>
                  <button className="btn center">cadastrar</button>
                </li>
              </ul>

            </form>
          </div>

          <div><br/><br/></div>
        </div>

      </div>
    </div>
  );
}

export default Passos;