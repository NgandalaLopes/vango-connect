import React from 'react'
import './Header.css'
import LogoSVG from './img/logo-light.svg'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className='header'> 
        <div className='header__left'>
            <img src={LogoSVG} className='logoSVG' alt='logo' />
            <div className='header__search'>
                <SearchIcon />
            <input type='text' placeholder='Search' />
            </div>

        </div>
        <div className='header__right'> 
             <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Village' />
                <HeaderOption Icon={LocalMoviesOutlinedIcon} title='Opportunities ' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar='https://sharpfocusphoto.com/wp-content/uploads/2014/10/altorro-actor-415-1.jpg' title='me' />
        </div>
         
    </div>
  )
}

export default Header