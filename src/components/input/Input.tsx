import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import './input.scss'

type DetailedProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DetailedProps & {
  label?: string
}
const Input: React.FC<InputPropsType> = ({
                                           type,
                                           title,
                                           name,
                                           value,
                                           onChange,
                                           placeholder,
                                           label,
                                           onBlur
                                         }) => {
  return (
    <label title={label} htmlFor={name} className='label'>
      <input
        name={name}
        title={title}
        type={type}
        className='input'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </label>
  );
};

export default Input;
