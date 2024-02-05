import React, {MouseEvent} from 'react';

export type ButtonPropsType = {
  title?: string,
  onClick?: () => void;
  style?: string
}

const Button: React.FC<ButtonPropsType> = ({title, onClick, style}) => {

  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button