import React from 'react';

type ButtonProps = {
  text: string;
  handlerClickButton?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  text,
  handlerClickButton,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      className={`m-0 h-[44px] rounded-sm px-4 text-base font-bold ${
        disabled ? 'bg-gray-400 text-black' : 'bg-black text-white'
      }`}
      onClick={handlerClickButton}
      // eslint-disable-next-line react/button-has-type
      type={type as 'button'}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
