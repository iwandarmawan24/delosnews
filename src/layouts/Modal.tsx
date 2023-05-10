import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-30 flex items-center justify-center ${
        isOpen ? 'visible' : 'invisible'
      } ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300`}
    >
      <div className="fixed inset-0 z-30 bg-black opacity-60" />
      <div className="relative z-50 min-w-[200px] rounded-lg bg-white p-8">
        <button
          className="absolute right-0 top-0 mr-4 text-black hover:text-gray-700"
          onClick={closeModal}
          type="button"
        >
          X
        </button>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
