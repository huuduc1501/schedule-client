import React, { useRef, useState } from 'react';
import styled from 'styled-components'

import { AddIcon } from '../components/Icon'
import setSchedule from '../utils/setSchedule'

const ClusterWrap = styled.div`
    width: 90%;
    padding: 1.6rem;
    margin: 0 auto;

`
const RoomWrap = styled.div`
    padding: 0 1.5rem;

    .cluster__header input {
        margin-right: 1rem;
        height: 1.8rem;
    }
    .room .grid{
        width: 50%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 1rem;
    }

    .class .grid {
        overflow-x: auto;
        display: grid;
        grid-template-columns: repeat(5,auto);
        gap: 1rem;
    }

    input ,select {
        padding: .2rem .5rem;
        border-radius: 4px;
        border: 2px solid ${props => props.theme.yellow};
         /* background: ${props => props.theme.darkGrey};
        color:${props => props.theme.white} ;  */
    }


    .ruler {
        height: 2px;
        background: ${props => props.theme.pink};
        flex-grow: 2;
    }
    .title {
        display: flex;
        align-items:center;
        margin: 1rem 0;
        gap: 1rem;
    }

    button {
        background: ${props => props.theme.yellow};
        border: 1px solid ${props => props.theme.yellow};
        padding: .2rem .6rem;
        border-radius: 30px;
        text-transform: uppercase;
    }

`

const CreateCluster = () => {
    const [roomLine, setRoomLine] = useState(1)
    const [classLine, setClassLine] = useState(1)
    // const [type, setType] = useState('text')
    const roomList = useRef([])
    const classroomList = useRef([])
    const formRef = useRef()
    roomList.current = []
    classroomList.current = []

    for (let i = 0; i < roomLine; i++) {
        roomList.current.push(<input key={i * 3} type='text'  placeholder='Tên phòng' name='name' />)
        roomList.current.push(
            <select key={i * 3 + 1} id='maxPupils' defaultValue='Số lượng tối đa'>
                {/* <option disabled  hidden selected>Số lượng tối đa</option> */}
                <option value={30}>30 người</option>
                <option value={50}>50 người</option>
            </select>)
        roomList.current.push(
            <select key={i * 3 + 2} id='roomType' >
                {/* <option disabled selected hidden>Loại phòng</option> */}
                <option value='PT'>Phòng bình thường</option>
                <option value='PM'>Phòng máy tính </option>
            </select>)

    }

    for (let i = 0; i < classLine; i++) {
        classroomList.current.push(<input key={i * 500} type='text' placeholder='Tên lớp' name='name' />)
        classroomList.current.push(<input key={i * 500 + 1} type='number' placeholder='sĩ số' name='numberOfPupils' />)
        classroomList.current.push(<input key={i * 500 + 2} type='number' placeholder='Số ngày học' name='learnDay' min={1} />)
        classroomList.current.push(
            <select key={i * 500 + 3} id='dayType'>
                {/* <option disabled selected hidden>Kiểu ngày học</option> */}
                <option value='even'>ngày chẵn</option>
                <option value='odd'>ngày lẻ</option>
                <option value='full'>Cả tuần</option>
            </select>)
        classroomList.current.push(
            <select key={i * 500 + 4} id='roomType' >
                {/* <option disabled selected hidden>Loại phòng</option> */}
                <option value='PT'>Phòng bình thường</option>
                <option value='PM'>Phòng máy tính </option>
            </select>)
    }


    const handleRoomIncreese = () => {
        setRoomLine(roomLine + 1)
    }
    const handleClassIncrease = () => {
        setClassLine(classLine + 1)
    }
    // const handleType = (e) => {
    //     e.preventDefault()
    //     setType('date')
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        let clusterData = { cluster: {}, classroomList: [], roomList: [], }
        let obj = {}
        for (let i = 0; i < 2; i++) {
            clusterData.cluster[formRef.current[i].name] = formRef.current[i].value
        }
        for (let i = 2; i < 2 + roomLine * 3; i++) {
            obj[formRef.current[i].name || formRef.current[i].id] = formRef.current[i].value
            if ((i - 1) % 3 === 0) {
                obj.status = {}
                clusterData.roomList.push(obj)
                obj = {}
            }

        }
        for (let i = 2 + roomLine * 3; i < formRef.current.length - 1; i++) {
            obj[formRef.current[i].id || formRef.current[i].name] = formRef.current[i].value
            if ((i - 1 - roomLine * 3) % 5 === 0) {
                clusterData.classroomList.push(obj)
                obj = {}
            }
        }
        // console.log(clusterData)
        console.log(setSchedule(clusterData))

    }

    return (
        <ClusterWrap>
            <RoomWrap>
                <form
                    onSubmit={handleSubmit}
                    ref={formRef}
                >

                    <div className='cluster__header'>
                        <div className='title'>
                            <h2>Tên cụm</h2>
                            <div className='ruler'></div>
                        </div>
                        <input type='text' placeholder='Tên cụm' name='name' />

                        {/* <input type={type} placeholder='Ngày bắt đầu học' onFocus={handleType} /> */}
                        <input type='date' name='beginDay' />


                    </div>
                    <div className='room'>
                        <div className='title'>
                            <h2>Thêm phòng</h2>
                            <div className='ruler' />
                        </div>
                        <div className='grid'>
                            {roomList.current}
                            <AddIcon onClick={handleRoomIncreese} />

                        </div>

                    </div>
                    <div className='class'>
                        <div className='title'>
                            <h2>Thêm lớp</h2>
                            <div className='ruler' />
                        </div>
                        <div className='grid'>
                            {classroomList.current}
                            <AddIcon onClick={handleClassIncrease} />
                        </div>

                    </div>
                    <div className='title'>
                        <div className='ruler' />
                        <button >Hoàn thành</button>
                        <div className='ruler' />

                    </div>
                </form>


            </RoomWrap>

        </ClusterWrap>
    );
};

export default CreateCluster;