import React from 'react'
import '../assets/styles/RoleCard.css'
import Arrow from '../../src/assets/images/arrow.png'

export default function RoleCard({ role, divison, desc, link }) {
  return (
    <div id='open-role-card' className='shadow-xl'>
      <h2 className='blue-text font-semibold text-2xl mb-3'>{role}</h2>
      <h3 className='font-medium'>{divison}</h3>
      <p className='text-sm text-gray-700 '>{desc}</p>
      <a href={link} target='_blank' className='flex items-center justify-around blue-text role-apply-btn mx-auto mt-10 '>Apply  <img src={Arrow} className='w-[16px] h-[16px]' /> </a>
    </div>
  )
}
