import React, {ChangeEvent, FocusEvent} from 'react';
import './input.css'


type PropsTypes = {
  onChange?: (value: string) => void
  label?: string
  value?: string | number
  onBlur?: (value: FocusEvent<HTMLInputElement>) => void
  name?: string
  type: string
}

export const Input: React.FC<PropsTypes> = ({
                                              onBlur,
                                              label,
                                              value,
                                              name,
                                              onChange,
                                              type,
                                            }) => {


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  }

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
  }

  return (
    <label htmlFor={name} className='label'>{label}
      <input onBlur={onBlurHandler}
             value={value}
             type={type}
             className='input'
             onChange={onChangeHandler}
      />
    </label>
  );
}