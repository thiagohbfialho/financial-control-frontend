import '../common/template/dependencies'
import React from "react";
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Content from '../common/template/content';
import Footer from '../common/template/footer';

export default props => (
  <div className="wrapper">
    <Header/>
    <Sidebar/>
    <Content/>
    <Footer/>
  </div>
)