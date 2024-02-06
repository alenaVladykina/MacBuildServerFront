import React, {FormEvent, useEffect, useState} from 'react';
import {Input} from "../../components/input/Input";
import Button from "../../components/buttons/Button";
import './data.css'


const Data = () => {
  const [currentValue, setCurrentValue] = useState<number>(new Date().getFullYear());
  const [newValue, setNewValue] = useState<number>(new Date().getFullYear());
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [error, setError] = useState<false | string>(false)

  useEffect(() => {
    if (newValue.toString().length < 4 || newValue < 1900 || newValue > 2024) {
      setError('Введена некорректная дата')
    } else {
      setError(false)
    }
  }, [newValue])


  const onEdit = () => {
    setIsEdit(true);
  }

  const onChange = (value: string) => {
    setNewValue(Number(value));
  }

  const onSave = (e: (FormEvent<HTMLFormElement | HTMLButtonElement>)) => {
    e.preventDefault()
    setCurrentValue(newValue);
    setIsEdit(false);
  }

  return (
    <div className={'data'}>
      <h2>Дата рождения</h2>
      {isEdit ? (
        <form className={'data_save'} onSubmit={onSave}>
          <Input type='number'
                 value={newValue}
                 onChange={onChange}/>
          <Button className='default'
                  type='submit'
                  active={false}
                  onClick={onSave}
                  disabled={Boolean(error)}>
            Save
          </Button>
          {error && <p className={'error'}>{error}</p>}
        </form>
      ) : (
        <div className={'data_edit'}>
          <div className={'data_edit_item'}>{currentValue}</div>
          <Button className={'default'}
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