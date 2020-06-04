import React from 'react';
import InlineSVG from 'react-inlinesvg';
import { Helmet } from 'react-helmet';

const elementosUrl = require('../../../images/elementosicon.svg');
const asteriskUrl = require('../../../images/p5-asterisk.svg');

const images = [(asteriskUrl), (elementosUrl),];

const logoUrl = require('../../../images/new/logo2.svg');

const audioUrl = require('../../../images/new/t-audio.svg');
const codeUrl = require('../../../images/new/t-code.svg');
const corUrl = require('../../../images/new/t-cor.svg');
const imagesUrl = require('../../../images/new/t-images.svg');
const tlogoUrl = require('../../../images/new/t-logo.svg');
const musicaUrl = require('../../../images/new/t-musica.svg');
const searchUrl = require('../../../images/new/search.svg');
const sonsUrl = require('../../../images/new/sons.svg');
const copyUrl = require('../../../images/new/copy.svg');
const bugUrl = require('../../../images/new/bug.svg');


function Passos(props) {
  return (
    <div>
      {/* ####################### TABLET NOVO APP ####################### */}
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

      {/* ####################### TABLET PRIMEIRO ACESSO ####################### */}
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

      {/* ####################### TABLET LOGIN ####################### */}
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

      {/* ####################### TABLET CADASTRO ####################### */}
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

      {/* ####################### LIVRO SPRITE ####################### */}
      <div className="bg-black">
        
        <div className="book">
          <div className="book-tabs">
            <div className="tab active">
              <span>Sprite</span>
              <InlineSVG src={tlogoUrl} alt="" />
            </div>
            <div className="tab">
              <span>Imagens</span>
              <InlineSVG src={imagesUrl} alt="" />
            </div>
            <div className="tab">
              <span>Tab 3</span>
              <InlineSVG src={corUrl} alt="" />
            </div>
            <div className="tab">
              <span>Músicas</span>
              <InlineSVG src={audioUrl} alt="" />
            </div>
            <div className="tab">
              <span>Sons</span>
              <InlineSVG src={musicaUrl} alt="" />
            </div>
            <div className="tab">
              <span>Comandos</span>
              <InlineSVG src={codeUrl} alt="" />
            </div>
          </div>  
          <div className="book-content">
            <div className="w50">
              <div className="search d-flex a-center">
                <input type="text" placeholder="Buscar" />
                <button className="btn-search">
                  <InlineSVG src={searchUrl} alt="" />
                </button>
              </div>
              <div className="list">
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
              </div>
            </div>

            <div className="w50 right">
              <div className="buttons d-flex jc-end">
                <button className="btn">Anterior</button>
                <button className="btn">Proximo</button>
              </div>
              <div className="list">
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
                <div className="box">
                  <img src={'https://placehold.it/100'} alt="Logo" />
                  <p>Sprite n+</p>
                </div>
              </div>
            </div>
          </div>        
        </div>

      </div>

      {/* ####################### LIVRO SONS ####################### */}
      <div className="bg-black">
        
        <div className="book">
          <div className="book-tabs">
            <div className="tab">
              <span>Sprite</span>
              <InlineSVG src={tlogoUrl} alt="" />
            </div>
            <div className="tab">
              <span>Imagens</span>
              <InlineSVG src={imagesUrl} alt="" />
            </div>
            <div className="tab">
              <span>Tab 3</span>
              <InlineSVG src={corUrl} alt="" />
            </div>
            <div className="tab">
              <span>Músicas</span>
              <InlineSVG src={audioUrl} alt="" />
            </div>
            <div className="tab active">
              <span>Sons</span>
              <InlineSVG src={musicaUrl} alt="" />
            </div>
            <div className="tab">
              <span>Comandos</span>
              <InlineSVG src={codeUrl} alt="" />
            </div>
          </div>  
          <div className="book-content">
            <div className="w50">
              <div className="search d-flex a-center">
                <input type="text" placeholder="Buscar" />
                <button className="btn-search">
                  <InlineSVG src={searchUrl} alt="" />
                </button>
              </div>
              <div className="list">
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
              </div>
            </div>

            <div className="w50 right">
              <div className="buttons d-flex jc-end">
                <button className="btn">Anterior</button>
                <button className="btn">Proximo</button>
              </div>
              <div className="list">
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
                <div className="box">
                  <img src={sonsUrl} alt="Som" />
                  <p>Som 99</p>
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div>

      {/* ####################### LIVRO COMANDOS ####################### */}
      <div className="bg-black">
      
        <div className="book">
          <div className="book-tabs">
            <div className="tab">
              <span>Sprite</span>
              <InlineSVG src={tlogoUrl} alt="" />
            </div>
            <div className="tab">
              <span>Imagens</span>
              <InlineSVG src={imagesUrl} alt="" />
            </div>
            <div className="tab">
              <span>Tab 3</span>
              <InlineSVG src={corUrl} alt="" />
            </div>
            <div className="tab">
              <span>Músicas</span>
              <InlineSVG src={audioUrl} alt="" />
            </div>
            <div className="tab">
              <span>Sons</span>
              <InlineSVG src={musicaUrl} alt="" />
            </div>
            <div className="tab active">
              <span>Comandos</span>
              <InlineSVG src={codeUrl} alt="" />
            </div>
          </div>  
          <div className="book-content">
            <div className="w50">
              <p className="txt">Toda linguagem de programação tem uma lista de comandos que o computador pode compreender. Clique nos comandos abaixo e descubra o que eles fazem.</p>
              <div className="book-scroll">
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
                <ul>
                  <li><span>Desenhar</span></li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                  <li>box</li>
                </ul>
              </div>
            </div>
            <div className="w50 right">

              <div className="selected">
                <span className="h1">Fill();</span>
                <p>O comando fill() aponta sempre para uma imagem de fundo ou para uma cor. As imagens de fundo ou as cores sempre ficarão atrás de todos os demais objetos (sprites, textos, etc.) inseridos na tela</p>

                <span className="h1 primary">Exemplos:</span>

                <div className="copy">
                  <span className="label">Inserir um fundo vermelho</span>
                  <div className="field d-flex jc-bet a-center">
                    <div>
                      <span className="secundary">fill</span>(<span className="primary">'red'</span>)
                    </div>
                    <InlineSVG src={copyUrl} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>        
        </div>
      </div>

    {/* ####################### TABLET BUG ####################### */}
      <div className="passos">
        
        <div className="tablet bug white d-flex colunm jc-bet a-center">
          <div>
            <p className="big">BUGOU!!!</p>
            <p className="text">Alguma coisa errada não está certa...</p>
          </div>
          <img src={bugUrl} alt="Bugou" />
          <div>
            <p className="text">Perto da linha 7</p>
            <p className="text"><span className="primary">drau()</span> não está definido</p>
            <p>Você está tentando fazer algo utilizando uma variável que não existe. Provavelmente você digitou algo errado.</p>
          </div>
        </div>

      </div>

    {/* ####################### QR CODE ####################### */}
      <div className="bg-black">
        
        <div className="qrcode white d-flex colunm jc-bet a-center">
          <p className="h1">Compartilhe seu projeto</p>
          <img src={'https://placehold.it/300'} alt="Logo" />
          <div className="link">
            <p>Link para compartilhamento: </p>
            <a href=""><InlineSVG src={copyUrl} alt="" />www.siteescolainventor.com.br/codigoKs828@asd</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Passos;
