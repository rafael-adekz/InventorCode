import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import InlineSVG from 'react-inlinesvg';

import * as IDEActions from '../actions/ide';
import * as preferenceActions from '../actions/preferences';
import * as projectActions from '../actions/project';

const playUrl = require('../../../images/play.svg');
const stopUrl = require('../../../images/stop.svg');
const preferencesUrl = require('../../../images/preferences.svg');
const editProjectNameUrl = require('../../../images/pencil.svg');

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.hideEditProjectName();
    }
  }

  handleProjectNameChange(event) {
    this.props.setProjectName(event.target.value);
  }

  validateProjectName() {
    if (this.props.project.name === '') {
      this.props.setProjectName(this.originalProjectName);
    }
  }

  canEditProjectName() {
    return (this.props.owner && this.props.owner.username
      && this.props.owner.username === this.props.currentUser)
      || !this.props.owner || !this.props.owner.username;
  }

  render() {
    const playButtonClass = classNames({
      'toolbar__play-button': true,
      'toolbar__play-button--selected': this.props.isPlaying
    });
    const stopButtonClass = classNames({
      'toolbar__stop-button': true,
      'toolbar__stop-button--selected': !this.props.isPlaying
    });
    const preferencesButtonClass = classNames({
      'toolbar__preferences-button': true,
      'toolbar__preferences-button--selected': this.props.preferencesIsVisible
    });
    const nameContainerClass = classNames({
      'toolbar__project-name-container': true,
      'toolbar__project-name-container--editing': this.props.project.isEditingName
    });

    return (
      <div className="toolbar">
        
      </div>
    );
  }
}

Toolbar.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  preferencesIsVisible: PropTypes.bool.isRequired,
  stopSketch: PropTypes.func.isRequired,
  setProjectName: PropTypes.func.isRequired,
  openPreferences: PropTypes.func.isRequired,
  owner: PropTypes.shape({
    username: PropTypes.string
  }),
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isEditingName: PropTypes.bool,
    id: PropTypes.string,
  }).isRequired,
  showEditProjectName: PropTypes.func.isRequired,
  hideEditProjectName: PropTypes.func.isRequired,
  infiniteLoop: PropTypes.bool.isRequired,
  autorefresh: PropTypes.bool.isRequired,
  setAutorefresh: PropTypes.func.isRequired,
  setTextOutput: PropTypes.func.isRequired,
  setGridOutput: PropTypes.func.isRequired,
  startSketch: PropTypes.func.isRequired,
  startAccessibleSketch: PropTypes.func.isRequired,
  saveProject: PropTypes.func.isRequired,
  currentUser: PropTypes.string
};

Toolbar.defaultProps = {
  owner: undefined,
  currentUser: undefined
};

function mapStateToProps(state) {
  return {
    autorefresh: state.preferences.autorefresh,
    currentUser: state.user.username,
    infiniteLoop: state.ide.infiniteLoop,
    isPlaying: state.ide.isPlaying,
    owner: state.project.owner,
    preferencesIsVisible: state.ide.preferencesIsVisible,
    project: state.project,
  };
}

const mapDispatchToProps = {
  ...IDEActions,
  ...preferenceActions,
  ...projectActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
