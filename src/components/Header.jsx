import React from 'react';

const Header = () => {
  return (
    <header className='w-full h-[4rem] bg-[#FFFFFF] flex items-center'>
      <div className='container w-full relative flex justify-center h-full'>
        <span className='absolute flex items-center left-0 top-1/2 -translate-y-1/2 font-roboto font-bold tracking-[1px] text-[#212529]'>
          <svg
            className='w-8 mr-3'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                d='M5.63636 16C2.90909 16 2 14 2 12C2 10 2.90909 8 5.63636 8C9.27273 8 14.7273 16 18.3636 16C21.0909 16 22 14 22 12C22 10 21.0909 8 18.3636 8C14.7273 8 9.27273 16 5.63636 16Z'
                stroke='#682EE4'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
            </g>
          </svg>
          TODO
        </span>
        <div className=''>
          <button className='relative text-[#343a40] font-roboto h-full group mr-3'>
            Главная
            <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#682EE4] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100'></span>
          </button>
          <button className='relative text-[#343a40] font-roboto h-full group'>
            Категории
            <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#682EE4] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100'></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
