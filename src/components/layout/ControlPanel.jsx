import React from 'react';
import BlockButton from './BlockButton';
import UnblockButton from './UnblockButton';
import DeleteButton from './DeleteButton';
import '../../css/controlPanel.css';

const ControlPanel = ({
  selectedCheckboxes,
  setSelectedCheckboxes,
  setRecords,
}) => {
  return (
    <div className="container control-panel mt-5">
      <div className="status-btn">
        <BlockButton
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
          setRecords={setRecords}
        />
        <UnblockButton
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
          setRecords={setRecords}
        />
      </div>
      <div className="delete-button">
        <DeleteButton
          selectedCheckboxes={selectedCheckboxes}
          setRecords={setRecords}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
