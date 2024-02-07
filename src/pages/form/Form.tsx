import React, {FormEvent, useState} from 'react';
import {Input} from "../../components/input/Input";
import Button from "../../components/buttons/Button";


const Form = () => {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(email);
    setEmail('');
    setError('');
  }

  const onChange = (value: string) => {
    setEmail(value.trim());
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    setError(isValidEmail ? '' : 'Невалидный email');
  }


  return (
    <section className='formPage'>
      <h2> {value ? value : 'Введите email'} </h2>
      <form onSubmit={handleSubmit}>
        <Input type='text' value={email} name='email' onChange={onChange}/>
        <Button type='submit' className='default' disabled={Boolean(error)}>Отправить</Button>
        {(error) && <p>{error}</p>}
      </form>
    </section>

  );
};

export default Form;