import React from 'react';
import { metaKeyName, } from '../../../utils/metaKey';

function KeyboardShortcutModal() {
  return (
    <ul className="keyboard-shortcuts" title="Atalhos do teclado">
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">{'\u21E7'} + Tab</span>
        <span>Arrumado</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + S
        </span>
        <span>Salvar</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + F
        </span>
        <span>Localizar Texto</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + G
        </span>
        <span>Localizar a próxima correspôndencia de texto</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + {'\u21E7'} + G
        </span>
        <span>Localizar correspôndencia de texto anterior</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + [
        </span>
        <span>Avançar código a esquerda</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + ]
        </span>
        <span>Avançar código a direita</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + /
        </span>
        <span>Linha de comentário</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + Enter
        </span>
        <span>Iniciar esboço</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + {'\u21E7'} + Enter
        </span>
        <span>Parar esboço</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + {'\u21E7'} + 1
        </span>
        <span>Ativar saída acessível</span>
      </li>
      <li className="keyboard-shortcut-item">
        <span className="keyboard-shortcut__command">
          {metaKeyName} + {'\u21E7'} + 2
        </span>
        <span>Desativar saída acessivel</span>
      </li>
    </ul>
  );
}

export default KeyboardShortcutModal;
