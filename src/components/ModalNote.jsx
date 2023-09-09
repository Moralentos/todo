import React from 'react';
import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { addNote } from '../Redux/noteCardSlice';
import { useDispatch, useSelector } from 'react-redux';

const ModalNote = ({ onCLickOpen }) => {
  const { note } = useSelector((state) => state.cardSlice);

  const dispatch = useDispatch();
  const [isOpen, setOpen] = React.useState(false);
  const [inputTitleValue, setInputTitleValue] = React.useState('');
  const [inputDescValue, setInputDescValue] = React.useState('');

  const [startDate, setStartDate] = useState(false);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className='hover:border-[#c8c8d1] py-1 flex items-center mr-3 border-[1px] border-[#e7e7ee] rounded-lg px-3 text-[#6F749C] font-roboto '
      onClick={onClick}
      ref={ref}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5 text-[#6F749C] mr-2 '
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
        />
      </svg>
      {startDate === false ? 'Дата' : value}
    </button>
  ));

  const handleInputTitleValue = (e) => {
    return setInputTitleValue(e.target.value);
  };
  const handleInputDescValue = (e) => {
    return setInputDescValue(e.target.value);
  };

  return (
    <>
      <div className='opacity-80 bg-slate-900 w-full h-[100vh] fixed right-0 top-0 overflow-hidden flex flex-col items-center justify-center '></div>
      <div className='z-1 w-full h-[100vh] fixed right-0 bottom-[10rem] overflow-hidden flex flex-col items-center justify-center '>
        <div className='content rounded-xl  w-[600px] bg-[#FFFFFF] p-6 flex justify-between  '>
          <div className='w-full'>
            <div className='flex flex-col w-full'>
              <input
                placeholder='Название записи...'
                className='font-roboto w-auto outline-none focus:outline-none text-xl'
                type='text'
                onChange={handleInputTitleValue}
              />
              <div className='h-[1px] w-full bg-[#F3F3F8] my-3'></div>
              <textarea
                className='font-roboto resize-none w-full focus:outline-none text-sm'
                placeholder='Описание...'
                name=''
                id=''
                cols='30'
                rows='3'
                onChange={handleInputDescValue}
              ></textarea>
            </div>

            <div className='flex justify-between items-center mt-2'>
              <div className='flex'>
                <DatePicker
                  dateFormat='dd.MM.yyyy'
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                  renderDayContents={(day, date) => <span className='font-roboto'>{day}</span>}
                />
                <button
                  onClick={() => setOpen(!isOpen)}
                  className='relative py-1 hover:border-[#c8c8d1] flex items-center mr-3 border-[1px] border-[#e7e7ee] rounded-lg px-3 text-[#6F749C] font-roboto '
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5 text-[#6F749C] mr-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
                    />
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 6h.008v.008H6V6z' />
                  </svg>
                  Категория
                  {isOpen && (
                    <div className=' absolute w-[150px]  bg-white left-20 top--16 rounded-xl shadow-2xl'>
                      <ul className='font-roboto flex flex-col p-2 text-lg text-[#6F749C] font-normal'>
                        <li className=''>
                          <button
                            onClick={() => console.log('edit')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Работа
                          </button>
                        </li>
                        <li className=''>
                          <button
                            onClick={() => console.log('priority')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Дом
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => console.log('delete')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Личное
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => console.log('delete')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Учеба
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => console.log('delete')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Финансы
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => console.log('delete')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Проекты
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => console.log('delete')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Важные
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => console.log('delete')}
                            className='hover:text-[#0D0D17] p-1'
                          >
                            Идеи
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </button>
              </div>
              <div className='flex'>
                <button
                  onClick={onCLickOpen}
                  className='hover:border-[#c8c8d1] flex items-center mr-3 border-[1px] border-[#e7e7ee] rounded-lg px-3 text-[#6F749C] font-roboto '
                >
                  Закрыть
                </button>
                <button
                  onClick={() => {
                    const date = startDate.toLocaleDateString('ru-RU');
                    dispatch(addNote({ inputTitleValue, inputDescValue, date }));
                  }}
                  className='transition duration-[45ms] hover:bg-[#804eee] bg-[#6a30e7] py-1 flex items-center  rounded-lg px-3 text-white font-roboto font-medium'
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNote;
