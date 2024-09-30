import React from 'react'
import '../assets/styles/Footer.css'
import Logo from '../../src/assets/images/LogoBLW.png'
import LinkedIn from '../../src/assets/images/linkedinn.svg'
import Insta from '../../src/assets/images/insta.svg'
import LinkTree from '../../src/assets/images/linktree.svg'
import NeuroDavis from '../../src/assets/images/neurodavis.png'
import Neurotechx from '../../src/assets/images/neurotechx.png'

export default function Footer() {
  return (
    <>


      <div id='footer ' className='flex pt-10 pl-10  pb-2'>
        <img src={Logo} className='w-[60px] h-[60px] mr-7' />
        <div id='sections' className='flex flex-wrap  items-start gap-16 justify-between w-[100%] mr-10'>

          <div id='site'>
            <h2 className='blue-text font-bold text-lg'>Site</h2>
            <ul className='text-gray-500 '>
              <a href='/' className='footer-link'> <li>Home</li> </a >
              <a href='/about' className='footer-link'> <li>About</li> </a>
              <a href='/joinus' className='footer-link'><li>Join Us</li></a>


            </ul>
          </div>

          <div id='other'>
            <h2 className='blue-text font-bold text-lg'>Other</h2>
            <ul className='text-gray-500 '>
              <a href='https://medium.com/neurotech-davis' target='_blank' className='footer-link'><li>Medium Page</li></a>
              <a href="mailto:email@example.com" target='_blank' className='footer-link'> <li>davisneurotech@gmail.com</li> </a >



            </ul>
          </div>

          <div id='socials'>
            <h2 className='blue-text font-bold text-lg'>Social</h2>
            <ul className='text-gray-500 '>
              <a href='https://www.linkedin.com/company/neurotech-davis/posts/?feedView=all' className='footer-link '> <li className='flex items-center gap-2'> <img src={LinkedIn} className='w-[20px]' /> LinkedIn</li> </a >
              <a href='https://linktr.ee/neurotechdavis' className='footer-link'> <li className='flex items-center  gap-2'> <img src={LinkTree} className='w-[25px]' /> Linktree</li> </a>
              <a href='https://www.instagram.com/neurotechdavis/?hl=en' className='footer-link'><li className='flex items-center  gap-2'> <img src={Insta} className='w-[25px]' /> Instagram</li></a>


            </ul>
          </div>

          <div id='sponsors'>
            <h2 className='blue-text font-bold text-lg'>Partners</h2>
            <ul className='text-gray-500 '>
              <li> <img src={NeuroDavis} className='w-[150px]' /> </li>
              <li> <img src={Neurotechx} className='w-[60px]' /> </li>



            </ul>
          </div>


        </div>


      </div>
      <h3 className='text-center text-gray-400 pb-10 pt-4'>Made with 💙 by Neurotech</h3>

    </>
  )
}
