import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/component-btn.png'
import { RiInstagramFill, RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { } from 'react-icons/fa'

const socialLink = [
  {
    path: "https://github.com/nandz07",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.linkedin.com/in/nandakumar-t-43a74a181/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.instagram.com/nandz_07/",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />
  },

]

const quickLink01 = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/',
    display: 'About us'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/',
    display: 'Blog'
  },
]

const quickLink02 = [
  {
    path: '/courses',
    display: 'Find a course'
  },
  {
    path: '/',
    display: 'About us'
  },
]
const quickLink03 = [
  {
    path: '/',
    display: 'Donate'
  },
  {
    path: '/contact',
    display: 'Contact us'
  },
]

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p>
              Copyright © {year} .
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLink.map((link, index) => (
                <Link to={link.path} key={index} target="_blank"
                  className='w-9 h-9 border border-solid border-[#181A1E]
                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Quick Links
            </h2>

            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              I want to:
            </h2>

            <ul>
              {quickLink02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Support
            </h2>

            <ul>
              {quickLink03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer