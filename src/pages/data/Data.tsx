import React, {FormEvent, useEffect, useState} from 'react';
import {Input} from "../../components/input/Input";
import Button from "../../components/buttons/Button";
import './data.css'


const Data = () => {
  const currentYear = new Date().getFullYear();
  const [currentValue, setCurrentValue] = useState<number>(currentYear);
  const [newValue, setNewValue] = useState<number>(currentYear);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const checkYear = newValue.toString().length < 4 || newValue < 1900 || newValue > currentYear;
    setError(checkYear ? 'Введена некорректная дата' : '')
  }, [newValue])


  const onEdit = () => {
    setIsEdit(true);
  }

  const onChange = (value: string) => {
    setNewValue(Number(value));
  }

  const onSave = (e: (FormEvent<HTMLFormElement | HTMLButtonElement>)) => {
    e.preventDefault();
    setCurrentValue(newValue);
    setIsEdit(false);
  }

  return (
    <div className='data'>
      <h2>Дата рождения</h2>
      {isEdit ? (
        <form className='data_save' onSubmit={onSave}>
          <Input type='number'
                 value={newValue}
                 onChange={onChange}/>
          <Button className='primary'
                  type='submit'
                  active={false}
                  onClick={onSave}
                  disabled={Boolean(error)}>
            Save
          </Button>
          {error && <p className='error'>{error}</p>}
        </form>
      ) : (
        <div className='data_edit'>
          <div className='data_edit_item'>{currentValue}</div>
          <Button className='primary'
                  onClick={onEdit}
                  disabled={Boolean(error)}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default Data;