import React from 'react';
import Promo from "./promo/Promo";
import PostList from "./posts/PostList";
import FeaturedWorks from "./featuredWorks/FeaturedWorks";

const Home = () => {


  return (
    <>
      <Promo/>
      <PostList/>
      <FeaturedWorks/>
    </>
  );
};

export default Home;