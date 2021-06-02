import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import moment from 'moment'

import styled from 'styled-components'

const ScheduleWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem;

    #schedule {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        gap: 1rem;
    }
`
const ScheduleBox = styled.div`
    background: ${props => props.theme.grey};
    border: 2px solid #ffac41;
    padding: .2rem .4rem;
    /* height: ${props => props.height || '120px'}; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const exampleCluster = {
    name: 'cumj 1', roomList: [
        {
            name: 'room1', classList: [
                { name: 'class1', beginDay: '', roomType: '' }
            ]
        }
    ]
}

const ScheduleModel = () => {
    // const { data: schedules } = useSelector(state => state.schedule)
    const [dayNow, setpresentDate] = useState(Date())
    const presentWeek = []
    const presentSchedule = []
    const presentDate = moment(dayNow)

    console.log(presentDate)
    // useEffect(() => {
    //     for (let i = 0; i < 7; i++) {
    //         presentWeek.push(new Date(new Date(presentDate).setDate(presentDate.getDay() - presentDate.getDay() + 1)))
    //     }
    // }, [])

    for (let i = 0; i < 7; i++) {
        presentWeek.push(presentDate.subtract(presentDate.days(), 'days').add(i*5, 'd').format('d/MM/YYYY'))
    }

    console.log(presentDate)
    console.log(presentWeek)


    // schedules?.roomList.forEach(room => {
    //     room.classList.forEach(classroom => {
    //         let dayType = null
    //         for (let i = 0; i < 7; i++) {
    //             let isPush = false

    //             if (i !== 6) {
    //                 dayType = i % 2 === 0 ? 'even' : 'odd'
    //             }
    //             if (classroom.dayType === dayType || classroom.dayType === 'full')
    //                 if (classroom.beginDay <= presentWeek[i] && classroom.finishDay > presentWeek[i]) {
    //                     presentSchedule.push(<ScheduleBox>heloo</ScheduleBox>)
    //                     isPush = true
    //                 }

    //             if (!isPush)
    //                 presentSchedule.push(<ScheduleBox>nothing</ScheduleBox>)

    //         }
    //     })
    // })
    return (
        <ScheduleWrap>
            <h2>Lịch học theo tuần</h2>
            {/* <h3>{schedules.name}</h3> */}
            {/* <span onClick={() => setpresentDate(new Date(presentDate.getDay - 7))}>{'<'}</span> */}
            {/* <span>{presentDate}</span> */}
            {/* <span onClick={() => setpresentDate(new Date(presentDate.getDay + 7))}>{'>'}</span> */}

            <div id='schedule'>
                {/* {presentWeek?.map(day => {
                    return <div><span>{moment(day).format('d/MM/YYY')}</span></div>
                })} */}
                {
                    // presentSchedule
                }
            </div>

        </ScheduleWrap>
    );
};

export default ScheduleModel;