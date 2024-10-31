// ProgressDialog.js
import React from 'react';
import './styles/ProgressDialog.css';
import CircularProgress from './CircularProgress';

const ProgressDialog = () => {
  return (
    <div className="progress-dialog-overlay">
      <div className="progress-dialog">
        <CircularProgress />
        <p style={{marginTop:'15px'}}>Please wait...</p>
        <p>Don't Press back button</p>
      </div>
    </div>
  );
};

export default ProgressDialog;
