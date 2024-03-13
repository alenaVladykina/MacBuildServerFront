import React from 'react';
import {works} from "../../commons/data";
import Work from "../work/Work";
import Content from "../content/Content";
import './workPage.scss'

const WorkPage = () => {

  const workList = works.map((work) => {

    return (
      <Work key={work.id}
            id={work.id}
            title={work.title}
            date={work.date}
            text={work.text}
            src={work.src}
            keyword={work.keyword}/>
    )
  })


  return (
    <section className='workPage'>
      <Content>
        <h2 className='work_title'>Work</h2>
        {workList}
      </Content>
    </section>
  );
};

export default WorkPage;