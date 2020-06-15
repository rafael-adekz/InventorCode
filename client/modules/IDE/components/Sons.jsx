import React from 'react';
import InlineSVG from 'react-inlinesvg';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';


const elementosUrl = require('../../../images/elementosicon.svg');
// const playUrl = require('../../../images/play.svg');
const asteriskUrl = require('../../../images/p5-asterisk.svg');
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


const images = [(asteriskUrl), (elementosUrl),];

function Sons(props) {
  return (
    <div className="bg-black">
    <div className="book">
      <div className="book-tabs">
        <div className="tab">
        <Link to="/personagens"><span>Sprite</span></Link>             
          <InlineSVG src={tlogoUrl} alt="" />
        </div>
        <div className="tab">
        <Link to="/fundos"><span>Fundos</span></Link>
          <InlineSVG src={imagesUrl} alt="" />
        </div>
        <div className="tab">
          <span>Tab 3</span>
          <InlineSVG src={corUrl} alt="" />
        </div>
        <div className="tab active">
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
        {/**  <div className="search d-flex a-center">
            <input type="text" placeholder="Buscar" />
            <button className="btn-search">
              <InlineSVG src={searchUrl} alt="" />
            </button>
          </div> */}
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
          </div>
        </div>

        <div className="w50 right">
        {/**   <div className="buttons d-flex jc-end">
            <button className="btn">Anterior</button>
            <button className="btn">Proximo</button>
          </div>*/}
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
          </div>
        </div>
      </div>        
    </div>

  </div>

  );
}

export default Sons;
