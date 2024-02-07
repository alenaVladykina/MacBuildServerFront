import React from 'react';
import Button from "../../components/buttons/Button";
import './buttonPage.css'

const ButtonPage = () => {

  return (
    <section className='buttonPage'>
      <div className='buttonTypes'>
        <h3 className='title'>Типы кнопок: primary, default, dashed</h3>
        <div className='buttonTypes_list'>
          <Button
            className='primary'
            active={false}
            disabled={false}>
            Button
          </Button>
          <Button
            className='default'
            active={false}
            disabled={false}>
            Button
          </Button>
          <Button
            className='dashed'
            active={false}
            disabled={false}>
            Button
          </Button>
        </div>
      </div>
      <div className='buttonTypes'>
        <h3 className='title'>Акивная кнопка</h3>
        <div className='buttonTypes_list'>
          <Button
            className='primary'
            active={true}
            disabled={false}>
            Button
          </Button>
        </div>
      </div>
      <div className='buttonTypes'>
        <h3 className='title'>Disabled кнопка</h3>
        <div className='buttonTypes_list'>
          <Button
            className='primary'
            disabled={true}>
            Button
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ButtonPage;