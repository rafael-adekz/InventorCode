import PropTypes from 'prop-types';
import React from 'react';
import InlineSVG from 'react-inlinesvg';
import classNames from 'classnames';
import { Console as ConsoleFeed } from 'console-feed';
import {
  CONSOLE_FEED_WITHOUT_ICONS, CONSOLE_FEED_LIGHT_STYLES,
  CONSOLE_FEED_DARK_STYLES, CONSOLE_FEED_CONTRAST_STYLES
} from '../../../styles/components/_console-feed.scss';
import warnLightUrl from '../../../images/console-warn-light.svg';
import warnDarkUrl from '../../../images/console-warn-dark.svg';
import errorLightUrl from '../../../images/console-error-light.svg';
import errorDarkUrl from '../../../images/console-error-dark.svg';
import debugLightUrl from '../../../images/console-debug-light.svg';
import debugDarkUrl from '../../../images/console-debug-dark.svg';
import infoLightUrl from '../../../images/console-info-light.svg';
import infoDarkUrl from '../../../images/console-info-dark.svg';
import consoleUrl from '../../../images/new/console.svg';

const upArrowUrl = require('../../../images/up-arrow.svg');
const downArrowUrl = require('../../../images/down-arrow.svg');

class Console extends React.Component {
  componentDidUpdate(prevProps) {
    this.consoleMessages.scrollTop = this.consoleMessages.scrollHeight;
    if (this.props.theme !== prevProps.theme) {
      this.props.clearConsole();
      this.props.dispatchConsoleEvent(this.props.consoleEvents);
    }

    if (this.props.fontSize !== prevProps.fontSize) {
      this.props.clearConsole();
      this.props.dispatchConsoleEvent(this.props.consoleEvents);
    }
  }

  getConsoleFeedStyle(theme, times) {
    const style = {};
    const CONSOLE_FEED_LIGHT_ICONS = {
      LOG_WARN_ICON: `url(${warnLightUrl})`,
      LOG_ERROR_ICON: `url(${errorLightUrl})`,
      LOG_DEBUG_ICON: `url(${debugLightUrl})`,
      LOG_INFO_ICON: `url(${infoLightUrl})`
    };
    const CONSOLE_FEED_DARK_ICONS = {
      LOG_WARN_ICON: `url(${warnDarkUrl})`,
      LOG_ERROR_ICON: `url(${errorDarkUrl})`,
      LOG_DEBUG_ICON: `url(${debugDarkUrl})`,
      LOG_INFO_ICON: `url(${infoDarkUrl})`
    };
    const CONSOLE_FEED_SIZES = {
      TREENODE_LINE_HEIGHT: 1.2,
      BASE_FONT_SIZE: this.props.fontSize,
      ARROW_FONT_SIZE: this.props.fontSize,
      LOG_ICON_WIDTH: this.props.fontSize,
      LOG_ICON_HEIGHT: 1.45 * this.props.fontSize,
    };

    if (times > 1) {
      Object.assign(style, CONSOLE_FEED_WITHOUT_ICONS);
    }
    switch (theme) {
      case 'light':
        return Object.assign(CONSOLE_FEED_LIGHT_STYLES, CONSOLE_FEED_LIGHT_ICONS, CONSOLE_FEED_SIZES, style);
      case 'dark':
        return Object.assign(CONSOLE_FEED_DARK_STYLES, CONSOLE_FEED_DARK_ICONS, CONSOLE_FEED_SIZES, style);
      case 'contrast':
        return Object.assign(CONSOLE_FEED_CONTRAST_STYLES, CONSOLE_FEED_DARK_ICONS, CONSOLE_FEED_SIZES, style);
      default:
        return '';
    }
  }

  MensagemErro(parametro){
    var resposta = "";
    var fraseArray = parametro;    //passo o valor do parâmetro para a variavel (em array)
    var fraseString = fraseArray.toString(); //passando o parâmetro para string (redutivel porem mantido para clareza)
    if(fraseString.includes('SyntaxError: expected expression, got')){
      //fraseString = fraseString.substring(fraseString.indexOf("line")+4)
      if(fraseString.includes('end of script')){
         fraseString = fraseString.substring(fraseString.indexOf("line")+4)
         resposta = "Encontrei um caractere que eu não esperava! Veja se você não esqueceu de fechar a chave de nenhum componente (Dê uma olhada na linha "+fraseString
        //console.log("passei end of script")
       }else{
        //console.log("passei expected expression")
        fraseString = fraseString.substring(fraseString.indexOf("line")+4)
        resposta = "Parece que o programa parou de rodar inesperadamente! Veja se tudo foi escrito corretamente. (Dê uma olhada na linha "+fraseString
       }
    }
    if(fraseString.includes('ReferenceError')){
      fraseString = fraseString.substring(fraseString.indexOf("line")+4);
       resposta = "Parece que você escreveu algo que não existe na nossa lista de comandos! (Dê uma olhada na linha "+fraseString;
    //  console.log("passei referenceerror");
    }
    if(fraseString.includes('missing } in compound statement')){
      fraseString = fraseString.substring(fraseString.indexOf("line")+4);
       resposta = "Parece que você esqueceu de fechar uma chave! (Dê uma olhada na linha "+fraseString;
      //console.log("passei referenceerror");
    }
   // fraseString = fraseString.substring(fraseString.indexOf("line")+4) 
   // teste = teste.substring(teste.indexOf("(")+1);
  //  var teste = "a b c d e f g h i j k l m nU o p q";
    //str = str.substring(str.indexOf("e")+1);
    //console.log("a linha em baixo dessa é a mensagem de erro com apenas a linha do erro");
    console.log(fraseString);
    return resposta;
  }

  render() {
    const consoleClass = classNames({
      'preview-console': true,
      'preview-console--collapsed': !this.props.isExpanded
    });

    return (
      <div className={consoleClass} role="main" title="console">
        <div className="preview-console__header">
          <h2 className="preview-console__header-title">
            Console
            <InlineSVG src={consoleUrl} />
          </h2>
          <div className="dflex">
            <div className="error_inf">
            {/*  <span>(1) Bug Encontrado</span>
              <span>(2) Chamados</span>
              <span>(1) Bug Encontrado</span>* */}
            </div>
            <div className="preview-console__header-buttons">
              <button className="preview-console__clear" onClick={this.props.clearConsole} aria-label="clear console">
                Apagar
              </button>
              <button
                className="preview-console__collapse"
                onClick={this.props.collapseConsole}
                aria-label="collapse console"
              >
                <InlineSVG src={downArrowUrl} />
              </button>
              <button className="preview-console__expand" onClick={this.props.expandConsole} aria-label="expand console">
                <InlineSVG src={upArrowUrl} />
              </button>
            </div>
          </div>
        </div>
        <div ref={(element) => { this.consoleMessages = element; }} className="preview-console__messages">
          {this.props.consoleEvents.map((consoleEvent) => {
            const { method, times } = consoleEvent;
            const { theme } = this.props;
            return (
              <div key={consoleEvent.id} className={`preview-console__message preview-console__message--${method}`}>
                { times > 1 &&
                  <div
                    className="preview-console__logged-times"
                    style={{ fontSize: this.props.fontSize, borderRadius: this.props.fontSize / 2 }}
                  >
                    {times}
                  </div>
                }
                <div className="error_mensagem">
                <p className="preview-console__mensagemtitulo">Parece que temos um bug aqui!</p>
                
                <p className="preview-console__mensagemtraduzida">{this.MensagemErro(consoleEvent.data)}</p>
                </div>
                <ConsoleFeed
                  styles={this.getConsoleFeedStyle(theme, times)}
                 // logs={[consoleEvent]}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Console.propTypes = {
  consoleEvents: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    args: PropTypes.arrayOf(PropTypes.string)
  })),
  isExpanded: PropTypes.bool.isRequired,
  collapseConsole: PropTypes.func.isRequired,
  expandConsole: PropTypes.func.isRequired,
  clearConsole: PropTypes.func.isRequired,
  dispatchConsoleEvent: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired
};

Console.defaultProps = {
  consoleEvents: []
};

export default Console;
