import React, { useState } from 'react';
import "./styles/AddsDialog.css";
import { GiCrossedBones } from "react-icons/gi";

export default function AddsDialog() {
    const [activeDialog, setActiveDialog] = useState('')
    const handleCloseDialog = ()=>{
        setActiveDialog('hide-dialog');
    }
  return (
    <div className={`adds-dialog-overlay ${activeDialog}`}>
      <div className={`adds-dialog-content ${activeDialog}`}>
        <GiCrossedBones className='adds-dialog-close-icon' onClick={handleCloseDialog}/>
      </div>
    </div>
  )
}
