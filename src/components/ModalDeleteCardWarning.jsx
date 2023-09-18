import React from 'react';
import { useState, forwardRef } from 'react';

import { addNote } from '../Redux/NoteCardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../Redux/NoteCardSlice';
import axios from 'axios';

const ModalNote = ({ setOpenDeleteTask, obj, taskId }) => {
  const dispatch = useDispatch();

  const onClickDeleteTask = async () => {
    const fetchDeleteNote = async (id) => {
      try {
        await axios.delete(`https://6507260b3a38daf4803f2b7c.mockapi.io/todo/${id}`);
        console.log('Удален таск с id:', id);
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
      }
    };

    await fetchDeleteNote(taskId);
    dispatch(fetchNotes());
    setOpenDeleteTask(false);
  };

  return (
    <>
      <div className='opacity-80 bg-slate-900 w-full h-[100vh] fixed right-0 top-0 overflow-hidden flex flex-col items-center justify-center '></div>
      <div className='z-12 w-full h-[100vh] fixed right-0 bottom-[10rem] overflow-hidden flex flex-col items-center justify-center '>
        <div className='content rounded-xl  w-[450px] bg-[#FFFFFF]'>
          <div className='content rounded-xl  w-[450px] bg-[#FFFFFF] p-6   '>
            <div className='items-center flex-row justify-center'>
              <div className='flex items-center justify-center'>
                <div className='mb-5 w-[80px] h-[80px] flex items-center justify-center bg-[#FDF4F4] rounded-full'>
                  <div className=' w-[60px] h-[60px] flex items-center justify-center bg-[#FCEEEE] rounded-full'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-8 h-8 text-[#D14343] flex items-center justify-center'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <span className='mb-5 flex justify-center items-center font-roboto text-xl font-medium'>
                Удалить?
              </span>
              <span className='flex justify-center items-center text-center font-roboto text-base font-normal'>
                Вы уверены что хотите удалить заметку? Данное действие невозможно будет отменить.
              </span>
            </div>
          </div>
          <div className=' w-full h-[100px] bg-[#F7F7F7] rounded-b-[9px] flex items-center justify-center'>
            <button
              onClick={() => setOpenDeleteTask(false)}
              className=' mr-5 flex items-center justify-center bg-white hover:bg-slate-100 rounded-md px-7 py-3 font-roboto shadow-md'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 mr-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
              Отменить
            </button>
            <button
              onClick={() => onClickDeleteTask()}
              className=' mr-5 flex items-center justify-center bg-[#D14343] text-white hover:bg-red-700 rounded-md px-7 py-3 font-roboto shadow-md'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 mr-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>
              Удалить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNote;
