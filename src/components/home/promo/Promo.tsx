import React from 'react';
import './promo.scss'
import Content from "../../content/Content";



const Promo = () => {


  return (
    <section className='main'>
      <Content home>
        <div className='main_header'>
          <div className='main_content'>
            <h1 className='main_title'>
              <span>Hi, I am John, </span>
              <span>Creative Technologist</span>
            </h1>
            <div className='main_subtitle'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim
              velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
            <button className='main_button'>Download Resume</button>
          </div>
          <div className='avatar'/>
        </div>
      </Content>
    </section>
  );
};

export default Promo;