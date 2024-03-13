import React from 'react';
import './title.scss'

type TitlePropsType = {
  level: number,
  title: string,
  type?: string,
  onClick?: () => void
}

export const Title: React.FC<TitlePropsType> = ({

                                                  level,
                                                  title,
                                                  type,
                                                  onClick
                                                }) => {

    function titleType() {
      switch (level) {
        case 1: {
          return <h1
                     onClick={onClick}>
            {title}
          </h1>
        }
        case 2: {
          return <h2 className='title_2' onClick={onClick}>{title}</h2>
        }
        case 3:
          if (type === 'posts') {
            return <h3 className='title_3 title_3__posts ' onClick={onClick}>{title}</h3>
          } else {
            return <h3 className='title_3 title_3__work ' onClick={onClick}>{title}</h3>
          }
        default: {
          return <h2 className='title_2' onClick={onClick}>{title}</h2>
        }
      }
    }

    return titleType()

  }
;
