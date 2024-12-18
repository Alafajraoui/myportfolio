import React from "react";
import "./VideoModal.css"; 

const VideoModal = ({ videoLink, onClose }) => {
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          ×
        </button>
        <video controls src={videoLink} className="video-modal-video" />
      </div>
    </div>
  );
};

export default VideoModal;
