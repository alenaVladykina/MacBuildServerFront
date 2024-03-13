import React from 'react';
import './footer.scss';
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import twitter from "@/assets/icons/twitter.svg";
import linkIn from "@/assets/icons/linkIn.svg";
import Content from "../content/Content";


const Footer = () => {
  return (
    <section className='footer'>
      <Content>
        <div className='container'>
          <ul className='footer_list'>
            <li className='footer_item'>
              <a href='https://www.facebook.com/?locale=ru_RU'>
                <img alt='icon' src={facebook}/>
              </a>
            </li>
            <li className='footer_item'>
              <a href='https://www.facebook.com/?locale=ru_RU'>
                <img alt='icon instagram' src={instagram}/>
              </a>
            </li>
            <li className='footer_item'>
              <a href='https://twitter.com/?lang=ru'>
                <img alt='icon' src={twitter}/>
              </a>
            </li>
            <li className='footer_item'>
              <a href='https://ru.linkedin.com/'>
                <img alt='icon' src={linkIn}/>
              </a>
            </li>
          </ul>
          <p className='footer_subtitle'>
            Copyright ©2020 All rights reserved
          </p>
        </div>
      </Content>
    </section>
  );
};

export default Footer;