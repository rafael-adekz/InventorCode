import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';
import React from 'react';
import CopyableInput from './CopyableInput';

class ShareModal extends React.PureComponent {
  render() {
    const {
      projectId,
      ownerUsername,
      projectName
    } = this.props;
    const hostname = window.location.origin;
    const downloadQR = () => {};
    return (
      <div className="share-modal" align="center">
        <h3 className="share-modal__project-name">
          {projectName}
        </h3>
        <div>
          <QRCode
            id={`${projectId}`}
            value={`${hostname}/${ownerUsername}/full/${projectId}`}
            size={290}
            level="H"
            includeMargin
          />
          <CopyableInput
            label="Link para copiar!"
            hasPreviewLink
            value={`${hostname}/${ownerUsername}/full/${projectId}`}
          />
        </div>
      </div>
    );
  }
}

ShareModal.propTypes = {
  projectId: PropTypes.string.isRequired,
  ownerUsername: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired
};

export default ShareModal;
