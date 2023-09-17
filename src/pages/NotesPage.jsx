import React from 'react';
import NoteCard from '../components/NoteCard';
import ModalNote from '../components/ModalNote';
import ModalDeleteCardWarning from '../components/ModalDeleteCardWarning';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../Redux/NoteCardSlice';

const Notes = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [isOpenSort, setOpenSort] = React.useState(false);
  const [isMounted, setMounted] = React.useState(false);
  const dispatch = useDispatch();

  const { note } = useSelector((state) => state.cardSlice);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (isMounted === false ?? note.length === 0) {
      const fetchNotes = async () => {
        const { data } = await axios.get('https://6507260b3a38daf4803f2b7c.mockapi.io/todo');
        dispatch(addNote(data));
      };
      fetchNotes();
      setMounted(true);
    }
  }, [isMounted, note, dispatch]);

  const onCLickOpen = () => {
    isOpen === true ? setOpen(false) : setOpen(true);
  };

  return (
    <div className='container h-[100rem] mt-10'>
      <div className='content px-5 pt-2 pb-5 max-w-[40rem] bg-[#FFFFFF] mx-auto rounded-xl drop-shadow-xl '>
        <div className='notes-top-content'>
          <div className='flex justify-between items-center h-10'>
            <h1 className='font-roboto font-medium text-xl text-[#0D0D17] flex items-center'>
              Записи
              <span className=' bg-[#F5F5F9] text-sm px-2 rounded-md ml-2 text-[#6F749C] font-medium font-roboto'>
                {note.length}
              </span>
            </h1>
            <div className='flex relative'>
              <button
                onClick={() => setOpenSort(!isOpenSort)}
                className='font-roboto  text-sm bg-[#E2EBFA] px-2 py-2 rounded-[7px] text-[#0760FB] hover:bg-[#d5e4ff] mr-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                  />
                </svg>
              </button>
              {isOpenSort && (
                <div className='overflow-hidden popup absolute w-[150px]  bg-white right-[12rem] top-0 rounded-xl shadow-2xl'>
                  <ul className='font-roboto flex flex-col  text-lg text-[#6F749C] font-normal'>
                    <li className=''>
                      <button
                        onClick={() => console.log('edit')}
                        className='hover:text-[#0D0D17] p-1 w-full py-1'
                      >
                        по алфавиту
                      </button>
                    </li>
                    <li className=''>
                      <button
                        onClick={() => console.log('priority')}
                        className='hover:text-[#0D0D17] p-1 w-full py-1'
                      >
                        по дате
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => console.log('delete')}
                        className=' hover:text-[#0D0D17] p-1 w-full py-1'
                      >
                        по категории
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <button
                onClick={onCLickOpen}
                className='font-roboto text-sm bg-[#E2EBFA] px-2 py-2 rounded-[7px] text-[#0760FB] hover:bg-[#d5e4ff]'
              >
                + Создать запись
              </button>
            </div>
          </div>
        </div>
        {note.map((obj) => (
          <NoteCard obj={obj}></NoteCard>
        ))}
        <div className='completed'>
          <div className='-notes font-roboto my-3 font-meidum text-[#343a40]'>Выполненные</div>
          <div className='note-card border-[1px] border-[#F3F3F8] mt-2 rounded-md px-2'>
            <div className='my-3 flex'>
              <svg
                className='w-[6rem] flex items-center mr-2 opacity-20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <g id='style=fill'>
                    {' '}
                    <g id='check-circle'>
                      {' '}
                      <path
                        id='Subtract'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.5303 10.0303C16.8232 9.73744 16.8232 9.26256 16.5303 8.96967C16.2374 8.67678 15.7626 8.67678 15.4697 8.96967L10.8434 13.5959C10.7458 13.6935 10.5875 13.6935 10.4899 13.5959L8.53033 11.6363C8.23744 11.3434 7.76256 11.3434 7.46967 11.6363C7.17678 11.9292 7.17678 12.4041 7.46967 12.697L9.42923 14.6566C10.1126 15.34 11.2207 15.34 11.9041 14.6566L16.5303 10.0303Z'
                        fill='#f15bb5'
                      ></path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
              <div className='note-card-text flex items-center'>
                <div className='note-card-text__text-block '>
                  <h3 className='font-roboto font-medium text-[#343a40] opacity-40'>
                    Купить молоко
                  </h3>
                  <p className='text-[#5f666d] text-sm opacity-40'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum, dolore
                    mollitia numquam quia blanditiis. Saepe sapiente ad obcaecati hic sequi quam
                    consequatur ducimus officia laudantium amet excepturi, iste ipsa?
                  </p>
                </div>
                <div className='note-card-text__tag ml-3 opacity-40'>
                  <span className='font-roboto text-[13px] bg-slate-200 rounded-[3px] p-2 font-medium '>
                    Покупки
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ModalNote onCLickOpen={onCLickOpen}></ModalNote>}
    </div>
  );
};

export default Notes;
