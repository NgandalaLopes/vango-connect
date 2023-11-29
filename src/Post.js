import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Posts({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>    
        <div className='post__buttons'>
          <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='#9da5b2' />
          <InputOption Icon={CommentOutlinedIcon} title='Comment' color='#9da5b2' />
          <InputOption Icon={ShareOutlinedIcon} title='Share' color='#9da5b2' />
          <InputOption Icon={SendOutlinedIcon} title='Send' color='#9da5b2' />
        </div>
    </div>
  )
}

export default Posts