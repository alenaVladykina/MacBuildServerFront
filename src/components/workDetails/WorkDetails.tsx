import React from 'react';
import Content from "../content/Content";
import "./workDetails.scss";
import app from '../../assets//works/app.png'
import car from '../../assets/works/car.png'
import checkList from '../../assets/works/checkList.png'


const WorkDetails = () => {

  return (
    <section className='workDetails'>
      <Content>
        <h3 className='workDetails_title'>Designing Dashboards with usability in mind</h3>
        <div className='work_subtitle'>
          <span className='work_date'>2020</span>
          <span className='work_keyword'>Dashboard, User Experience Design</span>
        </div>
        <p className='text'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <picture className='work_picture'>
          <img className='work_img'
               src={app}
               alt="image"/>
        </picture>
        <h4 className='heading1'>Heading 1</h4>
        <h4 className='heading2'>Heading 2</h4>
        <p className='text'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <picture className='work_picture'>
          <img className='work_img'
               src={car}
               alt="image"/>
        </picture>
        <picture className='work_picture'>
          <img className='work_img'
               src={checkList}
               alt="image"/>
        </picture>
      </Content>
    </section>
  );
};

export default WorkDetails;