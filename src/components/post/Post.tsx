import React from 'react';
import {PostType} from "../../commons/types";
import './post.scss'


const Post: React.FC<PostType> = ({
                                    id,
                                    title,
                                    date,
                                    subtitle,
                                    keywords
                                  }) => {
  return (
    <div className='post'>
      <h3 className='post_title'>{title}</h3>
      <div className='post_subTitle'>
        <div>{date}</div>
        <div>{keywords}</div>
      </div>
      <p className='post_text'>{subtitle}</p>
    </div>
  );
};

export default Post;