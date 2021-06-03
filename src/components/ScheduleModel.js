import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import styled from 'styled-components'
import { useParams } from 'react-router';
import { getCluster } from '../reducers/specifyCluster'

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
    border: 1px solid #ffac41;
    padding: .2rem .4rem;
    /* height: ${props => props.height || '120px'}; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ScheduleModel = () => {
    const { isFetching, data: cluster } = useSelector(state => state.cluster)
    const { clusterId } = useParams()
    const dispatch = useDispatch()
    const [dayNow, setpresentDate] = useState(Date())
    const presentWeek = []
    const presentSchedule = []
    const presentDate = moment(dayNow)

    useEffect(() => {
        dispatch(getCluster(clusterId))
    }, [clusterId, dispatch])


    for (let i = 0; i < 7; i++) {
        presentWeek.push(presentDate.day(i + 1).format('D/MM/YYYY'))
    }
    console.log(presentWeek)


    cluster.roomList?.forEach(room => {
        presentSchedule.push(<ScheduleBox>{room.name}</ScheduleBox>)


        for (let i = 0; i < 7; i++) {
            let dayType = null

            let isPush = false

            if (i !== 6) {
                dayType = i % 2 === 0 ? 'even' : 'odd'


                room.classList?.forEach(classroom => {

                    if (classroom.dayType === dayType || classroom.dayType === 'full') {
                        if (moment(presentWeek[i], 'D/MM/YYYY').diff(classroom.beginDay, 'day') >= 0 && moment(presentWeek[i], 'D/MM/YYYY').diff(classroom.finishDay, 'day') < 0) {

                            presentSchedule.push(<ScheduleBox>
                                <span>{`Lớp: ${classroom.name}`}</span>
                                <span>
                                    {`Sĩ số: ${classroom.numberOfPupils}`}
                                </span></ScheduleBox>)
                            isPush = true
                        }
                    }

                })
            }

            if (!isPush)
                presentSchedule.push(<ScheduleBox></ScheduleBox>)
        }

    })

    if (isFetching)
        return null

    const handleIncrease = (e) => {
        console.log('clik')
        setpresentDate((d) => moment(d).add(7, 'days'))
    }
    return (
        <ScheduleWrap>
            <h2>Lịch học theo tuần</h2>
            <h3>{cluster.name}</h3>
            <button onClick={() => setpresentDate((d) => moment(d).add(-7, 'days'))}>Tuần trước</button>
            <span>{presentDate.format('D/MM/YYYY')}</span>
            <button onClick={handleIncrease}>Tuần sau</button>

            <div id='schedule'>
                <ScheduleBox ></ScheduleBox>
                {presentWeek?.map(day => {
                    return <ScheduleBox><span>{day}</span></ScheduleBox>
                })}
                {
                    presentSchedule
                }
            </div>

        </ScheduleWrap>
    );
};

export default ScheduleModel;