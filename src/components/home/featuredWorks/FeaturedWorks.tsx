import React from 'react';
import './featuredWorks.scss';
import Content from "../../content/Content";
import Work from "../../work/Work";
import {works} from "../../../commons/data";
import {useNavigate} from "react-router-dom";


const FeaturedWorks = () => {

  const workList = works.map((work) => {
    return (
      <Work key={work.id}
            page='home'
            id={work.id}
            title={work.title}
            date={work.date}
            text={work.text}
            src={work.src}
            keyword={work.keyword}/>
    )
  }).slice(0, 3)

  return (
    <section className='works'>
      <Content home>
        <h2 className='works_title'> Featured works</h2>
        {workList}
      </Content>

    </section>
  );
};

export default FeaturedWorks;