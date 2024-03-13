import React from 'react';
import Promo from "./promo/Promo";
import PostList from "./posts/PostList";
import FeaturedWorks from "./featuredWorks/FeaturedWorks";
import {useLocation} from "react-router-dom";

const Home = () => {
  //const location = useLocation();
  // console.log(location)

  return (
    <>
      <Promo/>
      <PostList/>
      <FeaturedWorks/>
    </>
  );
};

export default Home;