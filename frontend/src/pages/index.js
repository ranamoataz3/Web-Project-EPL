import React from 'react';
import FanHome from "@features/fans/home/index";
import Banner from "@/features/admin/home/banner";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  return user.isAdmin ? <Banner /> : <FanHome />;
}

export default Home;


