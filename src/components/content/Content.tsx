import React from 'react';
import './content.scss'

const Content = (props: { children: React.ReactNode, home?: boolean }) => {
  const className = props.home ? 'layout' : 'page'
  return (
    <main className={className}>
      {props.children}
    </main>
  );
};

export default Content;

