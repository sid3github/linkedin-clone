import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon'>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h5 className='headerOption__title'>{title}</h5>
    </div>
  );
}

export default HeaderOption;
