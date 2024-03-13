import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import './button.scss';
type ButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const Button: React.FC<ButtonType> = React.memo(({
                                                          type,
                                                          title,
                                                          onClick,
                                                          className,
                                                          value,
                                                          ...restProps
                                                        }) => {

  return (
    <>
      <button
        type={type}
        className='button'
        onClick={onClick}
        {...restProps}
      >
        {title}
      </button>
    </>
  );
})