import React from 'react';
import InlineSVG from 'react-inlinesvg';
import { Helmet } from 'react-helmet';

const elementosUrl = require('../../../images/elementosicon.svg');
// const playUrl = require('../../../images/play.svg');
const asteriskUrl = require('../../../images/p5-asterisk.svg');

importAll(r) {
  return r.keys().map(r);
}
componentWillMount() {
  listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
}

function About2(props) {
  return (
    <div className="about__content">
      <Helmet>
        <title>Editor da Escola de Inventor About</title>
      </Helmet>
          <div>
              {
                    listOfImages.map(
                      (image, index) =>    <img key={index} src={image} alt="info"></img>
                    )
              }
          </div>
    </div>
  );
}

export default About2;
