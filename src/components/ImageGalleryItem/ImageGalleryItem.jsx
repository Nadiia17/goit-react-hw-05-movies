import { useState } from 'react';
import { GalleryImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={openModal}
      />

      {isModalOpen && (
        <Modal image={image} isOpen={isModalOpen} onCloseModal={closeModal} />
      )}
    </>
  );
};
