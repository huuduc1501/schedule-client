import React from 'react';

import styled, { keyframes } from 'styled-components'

const openModel = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const AddClassWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.7);
    animation: ${openModel} 0.5s ease-in-out;
    
    .new-class {
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
     input ,select{
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

const AddClassModel = () => {
    return (
        <AddClassWrap >
            <div className='new-class'>
                <input type='text' placeholder='Tên lớp' name='name' required />
                <input type='number' placeholder='sĩ số' name='numberOfPupils' required />
                <input type='number' placeholder='Số ngày học' name='learnDay' min={1} required />
                <select id='dayType' required>
                    {/* <option disabled selected hidden>Kiểu ngày học</option> */}
                    <option value='even'>ngày chẵn</option>
                    <option value='odd'>ngày lẻ</option>
                    <option value='full'>Cả tuần</option>
                </select>
                <select id='roomType' required>
                    {/* <option disabled selected hidden>Loại phòng</option> */}
                    <option value='PT'>Phòng bình thường</option>
                    <option value='PM'>Phòng máy tính </option>
                </select>
                <button > Tạo</button>
            </div>
        </AddClassWrap>
    );
};

export default AddClassModel;