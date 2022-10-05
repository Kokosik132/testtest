import React, {useEffect, useState} from 'react';
import './styleUsers.css';

import {arrayUser} from "../utils/array";

import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import MicIcon from '@mui/icons-material/Mic';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';

import {arraySettings} from "../utils/arraySettings";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Users = () => {
    let [settings, setSettings] = useState(false);
    let [message, setMessage] = useState('');

// modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = (title) => {
        setMessage(title)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
////////


    const changeSettings = () => {
        if (settings === false) {
            setSettings(true);
        } else {
            setSettings(false);
        }
    }

    useEffect(()=> {
        setSettings(true)
    },[])

    const newMessage = () => {
        return (
            <div className={'newMessageContainer'} style={{}}>
              teest
            </div>
        )
    }
    const style = {
        position: 'absolute',
        top: "77%",
        left: "74%",
        width: 400,
        bgcolor: '#eaeaea',
        pt: 2,
        px: 4,
        pb: 3,
    };

    const childModel = () => {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        return (
                <React.Fragment>
                    <h2 onClick={handleOpen} style={{cursor: "pointer"}}>{message}</h2>
                    <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{ ...style, width: 200, top: "50%",
                            left: "50%", }}>
                            <h2 id="child-modal-title" onClick={handleClose} style={{cursor: "pointer"}}>{message}</h2>

                        </Box>
                    </Modal>
                </React.Fragment>

        )
    }

    const Dots = () => {
        return (
            <div>
                <div  className={'containerSettings'} style={settings ? {display:'none'} : {display: "block"}}>
                    {arraySettings.map((settings) => (
                        <div key={settings.id}>
                            <div>
                                <div className={'mapContainer'} onClick={() => handleOpen(settings.title)}>
                                    <div>{settings.img}</div>
                                    <div style={{display: "flex", flexDirection: 'column', width: '80%'}}>
                                        <div style={{marginLeft: '10%'}}>{settings.title}</div>
                                        {settings.subTitle ? (<div style={{
                                            fontSize: "small",
                                            color: "gray",
                                            paddingLeft: "10%",
                                            paddingTop: "1%"
                                        }}>Відкрити файл Jam</div>) : (null)}
                                    </div>
                                </div>
                                {settings.underline ? (<div style={{borderTop: 'groove'}}></div>) : (null)}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        );
    };

    return (
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', height: '90vh', justifyContent: "center"}}>
            {arrayUser.map((user) => (
                <div style={{display: "flex", width: "24%", height: 255, position: 'relative',margin: 5}} key={user.id}>
                    <div style={{position: 'absolute', bottom: 10, left: 15, color: 'white'}}>{user.name} {user.lastname}</div>
                    <img src={user.img} style={{width: '100%', height: '100%', border: '1px solid black', borderRadius: 10, objectFit: 'cover' }}alt="face"/>
                </div>))}
            <div style={{width: '97%', display: "flex", justifyContent: "space-between", alignItems: 'center', padding: 15}}>
                <div style={{width: '12%'}} className='white'>Team meeting</div>
                <div className='containerIcon'>
                    <div className='icon'><MicIcon style={{width: 20}}/></div>
                    <div className='icon'><VideocamOutlinedIcon style={{width: 20}}/></div>
                    <div className='icon'><ClosedCaptionOffOutlinedIcon style={{width: 20}}/></div>
                    <div className='icon'><PanToolOutlinedIcon style={{width: 17, paddingRight: 3}}/></div>
                    <div className='icon'><PresentToAllIcon style={{width: 20}}/></div>
                        <div className='icon' onClick={() => {
                            changeSettings()
                        }}><MoreVertIcon style={{width: 20}}/></div>
                    <div className='iconCall'><CallEndIcon/></div>
                </div>
                <div style={{
                    display: 'flex',
                    gap: 10,}}>
                    <InfoOutlinedIcon style={{ width: 17, cursor: 'pointer'}} className='white'/>
                    <PeopleOutlinedIcon style={{ width: 17, position: 'relative', cursor: 'pointer'}} className='white'/>
                    <div className="notification" style={{position:'absolute', cursor: 'pointer'}}>52</div>
                    <SubtitlesOutlinedIcon style={{ width: 17, cursor: 'pointer'}} className='white'/>
                    <LanOutlinedIcon style={{ width: 17, cursor: 'pointer'}} className='white'/>
                </div>
            </div>
            {Dots()}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    {/*<h2 id="parent-modal-title">{message}</h2>*/}
                    {childModel()}
                </Box>
            </Modal>
        </div>
    );
};

export default Users;



