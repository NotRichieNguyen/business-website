import React, { useState } from "react";
import "../styles/Gallery.css";
import End from "./End";
import g6 from "../images/g6.jpg";
import g7 from "../images/g7.jpg";
import g8 from "../images/g8.jpg";
import g9 from "../images/g9.jpg";
import g10 from "../images/g10.jpg";
import g11 from "../images/g11.jpg";
import g12 from "../images/g12.jpg";
import g13 from "../images/g13.jpg";
import g14 from "../images/g14.jpg";
import g15 from "../images/g15.jpg";
import g16 from "../images/g16.jpg";
import g17 from "../images/g17.jpg";
import g18 from "../images/g18.jpg";
import g19 from "../images/g19.jpg";
import g20 from "../images/g20.jpg";
import g21 from "../images/g21.jpg";
import magnify from "../images/magnify.jpg";
import Modal from "react-modal";

function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="gallery-root">
      <div className="gallery-container">
        <div className="Gallery">Gallery</div>
      </div>
      <div className="gallery-container-2">
        <div className="gallery-images">
          <div className="g6-container" onClick={() => openModal(g6)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g6} alt="g6" className="g6" />
          </div>
          <div className="g7-container" onClick={() => openModal(g7)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g7} alt="g7" className="g7" />
          </div>
          <div className="g8-container" onClick={() => openModal(g8)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g8} alt="g8" className="g8" />
          </div>
          <div className="g9-container" onClick={() => openModal(g9)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g9} alt="g9" className="g9" />
          </div>
          <div className="g10-container" onClick={() => openModal(g10)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g10} alt="g10" className="g10" />
          </div>
          <div className="g11-container" onClick={() => openModal(g11)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g11} alt="g11" className="g11" />
          </div>
          <div className="g12-container" onClick={() => openModal(g12)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g12} alt="g12" className="g12" />
          </div>
          <div className="g13-container" onClick={() => openModal(g13)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g13} alt="g13" className="g13" />
          </div>
          <div className="g14-container" onClick={() => openModal(g14)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g14} alt="g14" className="g14" />
          </div>
          <div className="g15-container" onClick={() => openModal(g15)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g15} alt="g15" className="g15" />
          </div>
          <div className="g16-container" onClick={() => openModal(g16)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g16} alt="g16" className="g16" />
          </div>
          <div className="g17-container" onClick={() => openModal(g17)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g17} alt="g17" className="g17" />
          </div>
          <div className="g18-container" onClick={() => openModal(g18)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g18} alt="g18" className="g18" />
          </div>
          <div className="g19-container" onClick={() => openModal(g19)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g19} alt="g19" className="g19" />
          </div>
          <div className="g20-container" onClick={() => openModal(g20)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g20} alt="g20" className="g20" />
          </div>
          <div className="g21-container" onClick={() => openModal(g21)}>
            <div className="image-overlay">
              <img src={magnify} alt="Zoom" className="magnify-icon" />
            </div>
            <img src={g21} alt="g21" className="g21" />
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
        >
          <button className="close-modal-button" onClick={closeModal}>
            X
          </button>
          <img src={currentImg} alt="Expanded view" />
        </Modal>
      </div>
      <End />
    </div>
  );
}

export default Gallery;
