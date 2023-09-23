import React from 'react';
import NoteCard from '../components/NoteCard';
import ModalNote from '../components/ModalNote';
import ModalDeleteCardWarning from '../components/ModalDeleteCardWarning';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../Redux/NoteCardSlice';
import { setOpenAddTask } from '../Redux/EditTaskSlice';

const Notes = () => {
  // const [isOpenAddTask, setOpenAddTask] = React.useState(false);
  const [isOpenDeleteTask, setOpenDeleteTask] = React.useState(false);
  const [taskId, setTaskId] = React.useState();
  const [isOpenSort, setOpenSort] = React.useState(false);
  const [isMounted, setMounted] = React.useState(false);
  const dispatch = useDispatch();

  const { note } = useSelector((state) => state.cardSlice);
  const { openAddTask } = useSelector((state) => state.taskSlice);

  React.useEffect(() => {
    if (openAddTask || isOpenDeleteTask) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openAddTask, isOpenDeleteTask]);

  React.useEffect(() => {
    if (!isMounted) {
      dispatch(fetchNotes());
    }
    setMounted(true);
  }, [note]);

  // const onCLickOpen = () => {
  //   isOpenAddTask === true ? setOpenAddTask(false) : setOpenAddTask(true);
  // };

  const filteredNoteChecked = () => note.filter((list) => list.checked);
  const filteredNoteNonChecked = () => note.filter((list) => !list.checked);

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
                onClick={() => dispatch(setOpenAddTask())}
                className='font-roboto text-sm bg-[#E2EBFA] px-2 py-2 rounded-[7px] text-[#0760FB] hover:bg-[#d5e4ff]'
              >
                + Создать запись
              </button>
            </div>
          </div>
        </div>
        {filteredNoteNonChecked(note).map((obj, index) => (
          <NoteCard
            setTaskId={setTaskId}
            setOpenDeleteTask={setOpenDeleteTask}
            obj={obj}
            key={index}
          ></NoteCard>
        ))}
        <div className='completed'>
          <div className='-notes font-roboto my-3 font-meidum text-[#343a40]'>Выполненные</div>
          <div className='opacity-40'>
            {filteredNoteChecked(note).map((obj, index) => (
              <NoteCard
                setTaskId={setTaskId}
                setOpenDeleteTask={setOpenDeleteTask}
                obj={obj}
                key={index}
              ></NoteCard>
            ))}
          </div>
        </div>
      </div>
      {openAddTask && <ModalNote></ModalNote>}
      {isOpenDeleteTask && (
        <ModalDeleteCardWarning
          taskId={taskId}
          setOpenDeleteTask={setOpenDeleteTask}
          obj={note}
        ></ModalDeleteCardWarning>
      )}
    </div>
  );
};

export default Notes;
