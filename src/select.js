import React from 'react';
import './css/select.css';

function Select() {
  return (
    <div className="select">
      <body>
    <div class="container">
        <label class="custom-button" for="video-input">Select Video</label>
        
        <div class="drop-area">
            <p>or drop video here</p>
        </div>
        <p>Compatible with all video file formats</p>
    </div>
</body>
    </div>
  );
}

export default Select;