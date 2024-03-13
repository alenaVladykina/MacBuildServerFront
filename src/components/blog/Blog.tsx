import React from 'react';
import './blog.scss'
import {posts} from "../../commons/data";
import Content from "../content/Content";
import Post from "../post/Post";

const Blog = () => {
  const postList = posts.map((post) =>
    <Post key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          subtitle={post.subtitle}
          keywords={post.keywords}
    />
  )

  return (
    <section className='blog'>
      <Content>
        <h2 className='blog_title'>Blog</h2>
        {postList}
      </Content>
    </section>
  );
};

export default Blog;