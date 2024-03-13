import React from 'react';
import {PostType} from "../../commons/types";
import "./card.scss"

const Card: React.FC<PostType> = ({
                                    id,
                                    title,
                                    date,
                                    subtitle,
                                    keywords
                                  }) => {
  return (
    <div className='card'>
      <h3 className='card_title'>{title}</h3>
      <div className='card_subTitle'>
        <div>{date}</div>
        <div>{keywords}</div>
      </div>
      <p className='card_text'>{subtitle}</p>
    </div>
  );
};

export default Card;