import React from 'react';
import './postList.scss'
import {posts} from "../../../commons/data";
import Content from "../../content/Content";
import Card from "../../card/Card";
import {NavLink} from "react-router-dom";


const PostList = () => {

  const postList = posts.map((post) => (
    <Card key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          subtitle={post.subtitle}
          keywords={post.keywords}/>
  )).slice(0, 2)

  return (
    <section className='postList'>
      <Content home>
        <div className='postList_header'>
          <h2 className='postList_title'>Recent posts</h2>
          <NavLink className='postList_link' to='/blog'>View all</NavLink>
        </div>
        <div className='posts_wrapper'>
          {postList}
        </div>
      </Content>
    </section>
  );
};

export default PostList;