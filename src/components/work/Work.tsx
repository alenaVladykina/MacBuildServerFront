import React from 'react';
import {WorksType} from "../../commons/types";
import './work.scss'
import {useNavigate} from "react-router-dom";


const Work: React.FC<WorksType> = ({
                                     id,
                                     title,
                                     date,
                                     text,
                                     src,
                                     keyword,
                                     page,
                                   }) => {

    const navigate = useNavigate();

    const onNavigate = () => {
      page === 'home' ? navigate(`works/${id}`) : navigate(id);
    }

    return (
      <div className='work'>
        <picture className='work_picture'>
          <img className='work_img' src={src} alt="work image"/>
        </picture>
        <div className='work_content'>
          <h3 onClick={onNavigate} className='work_title'>{title}</h3>
          <div className='work_subtitle'>
            <span className='work_date'>{date}</span>
            <span className='work_keyword'>{keyword}</span>
          </div>
          <p className='work_text'>{text}</p>
        </div>
      </div>
    )
  }
;

export default Work;