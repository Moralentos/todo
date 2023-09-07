import React from 'react';

const NoteCard = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className='note-card border-[1px] border-[#F3F3F8] mt-2 rounded-md px-2 hover:border-[#0760fb2d]'>
      <div className='my-3 flex'>
        <div className='pr-2 '>
          <label class='custom-checkbox'>
            <input type='checkbox' class='hidden' />
            <span class='checkmark'></span>
          </label>
        </div>
        <div className='note-card-text flex flex-col '>
          <div className='note-card-text__text-block '>
            <h3 className='font-roboto font-medium text-[#0D0D17] flex justify-between'>
              Купить молоко{' '}
              <button
                onClick={() => setOpen(!isOpen)}
                className='text-xl text-[#6F749C] hover:text-[#565a77] mr-2 relative'
              >
                •••
                {isOpen && (
                  <div className=' absolute w-[150px]  bg-white right-7 top-0 rounded-xl shadow-xl'>
                    <ul className='font-roboto flex flex-col p-2 text-lg text-[#6F749C] font-normal'>
                      <li className=''>
                        <button
                          onClick={() => console.log('edit')}
                          className='hover:text-[#0D0D17] p-1'
                        >
                          Редактировать
                        </button>
                      </li>
                      <li className=''>
                        <button
                          onClick={() => console.log('priority')}
                          className='hover:text-[#0D0D17] p-1'
                        >
                          Приоритет
                        </button>
                      </li>
                      <li>
                        <button onClick={() => console.log('delete')} className=' text-red-500 p-1'>
                          Удалить
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            </h3>
            <p className='text-[#6F749C] text-lsfont-roboto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum, dolore
              mollitia numquam quia blanditiis. Saepe sapiente ad obcaecati hic sequi quam
              consequatur ducimus officia laudantium amet excepturi, iste ipsa?
            </p>
          </div>
          <div className='note-card-text__tag flex mt-2'>
            <div className='calendar flex '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-[red]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                />
              </svg>
              <span className='ml-1 text-[red]'>6.06.2023</span>
            </div>
            <div className='mx-2 flex items-center '>
              <span className='text-[#6f749c7c]'>•</span>
            </div>
            <div className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-[#6F749C]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                />
              </svg>
              <span className='ml-1 text-[#6F749C]'>Учеба</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
