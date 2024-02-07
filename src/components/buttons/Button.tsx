import React, {useState, MouseEvent} from 'react';
import classNames from "classnames";
import './button.css'


export type ButtonPropsType = {
  children?: React.ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: 'default' | 'dashed' | 'primary'
  active?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
}

const Button: React.FC<ButtonPropsType> = ({
                                             children,
                                             onClick,
                                             className,
                                             disabled = false,
                                             active = false,
                                             type
                                           }) => {

  const [activeBtn, setActiveBtn] = useState<boolean>(active);

  const classes = classNames(
    'btn', className, {active: activeBtn}
  )

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    setActiveBtn((state) => !state);
  }

  return (
    <button type={type}
            className={classes}
            onClick={handleClick}
            disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button