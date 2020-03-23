import React from 'react';
import InlineSVG from 'react-inlinesvg';
import { Helmet } from 'react-helmet';

const elementosUrl = require('../../../images/elementosicon.svg');
// const playUrl = require('../../../images/play.svg');
const asteriskUrl = require('../../../images/p5-asterisk.svg');

function about2(props) {
  return (
    <div className="about2__teste">
      <Helmet>
        <title>Editor da Escola de Inventor about2</title>
      </Helmet>
      <div className="about2__teste">
        <InlineSVG className="about2__teste" src={elementosUrl} />
        {/* Video button to hello p5 video page */}
        {/* <p className="about2__play-video">
          <a
            href="http://hello.p5js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InlineSVG className="about2__play-video-button" src={playUrl} alt="Play Hello Video" />
          Play hello! video</a>
        </p>  */}
      </div>
    </div>
  );
}

export default About2;
