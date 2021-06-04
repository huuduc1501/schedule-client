import React from 'react';

import styled, { keyframes } from 'styled-components'

import { client } from '../utils/index'
import { useParams } from 'react-router-dom'
import useInput from '../hooks/useInput'

const openModel = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const AddRoomWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.7);
    animation: ${openModel} 0.5s ease-in-out;
    
    .new-room {
        width: 500px;
        border-radius: 4px;
        background: ${props => props.theme.grey};
        margin: 48px auto;
        padding: 1rem 2rem;
        gap: 1.4rem;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.4), 0px 0px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
    }
     input, select {
        padding: .3rem .8rem;
        border-radius: 4px;
        border: none;
    }
     button {
        padding: .4rem .6rem;
        text-transform: uppercase;
        align-self: flex-end;
        background: ${props => props.theme.red};
        border: none;
        border-radius: 4px;
        color: white;
    }
    textarea {
        height:200px;
    }
`
const AddRoomModel = ({ setOpen }) => {
    const { clusterId } = useParams()
    const nameInput = useInput('')
    const puPilsInput = useInput(0)
    const roomtypeInput = useInput('PT')

    const handleSubmit = async e => {
        const payload = {
            name: nameInput.value,
            maxPupils: puPilsInput.value,
            roomType: roomtypeInput.value
        }
        await client(`/schedule/room/${clusterId}`, { body:payload})
        setOpen(false)
    }


    return (
        <AddRoomWrap>
            <div className='new-room'>
                <h3>Tạo thêm phòng</h3>
                <input value={nameInput.value} onChange={nameInput.onChange} type='text' placeholder='Tên phòng' name='name' />
                <input value={puPilsInput.value} onChange={puPilsInput.onChange} type='number' placeholder='Sức chứa' name='maxPupils' required />
                <select value={roomtypeInput.value} onChange={roomtypeInput.onChange} id='roomType' >
                    {/* <option disabled selected hidden>Loại phòng</option> */}
                    <option value='PT'>Phòng bình thường</option>
                    <option value='PM'>Phòng máy tính </option>
                </select>
                <button onClick={handleSubmit}>Tạo</button>
            </div>
        </AddRoomWrap>
    );
};

export default AddRoomModel;