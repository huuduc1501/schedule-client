import React from 'react';

import styled from 'styled-components'

const HomeWrap = styled.div`
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
    /* height: ${props=> props.height ||'120px'}; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Home = () => {
    let arr = []
    for (let i = 0; i < 49; i++) {
        arr.push(<ScheduleBox>
            <span>Thứ 2</span>
            <p>12/1/2121</p>
        </ScheduleBox>)
    }
    return (
        <HomeWrap>
            <h2>Lịch học theo tuần</h2>
            <div id='schedule'>
                {arr}
            </div>

        </HomeWrap>
    );
};

export default Home;