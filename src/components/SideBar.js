import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrap = styled.div`
    height: 100vh;
    width: 240px;
    background: ${props => props.theme.grey};
    position: fixed;
    top: 60px;
    left: 0;
    overflow: auto;
    padding-top: 1.5rem;

    .item {
        display: flex;
        align-items: center;
        padding: .4rem 0;
        padding-left: 1.5rem;
        margin-bottom: .4rem;
    }
    .item:hover {
        background: ${props => props.theme.darkGrey};
    }
    .active div {
        background: ${props => props.theme.darkGrey};
    }
    .ruler {
        height: 1px;
        margin:1rem 0 ;
        background: ${props => props.theme.darkGrey};
    }

`

const SideBar = () => {
    return (
        <Wrap>
            <NavLink
                to='/'
                activeClassName='active'
                exact
            >
                <div className='item'>
                    <span>Lịch của tôi</span>
                </div>
            </NavLink>
            <NavLink
                to='/themphong'
                activeClassName='active'
                exact
            >
                <div className='item'>
                    <span>Thêm phòng</span>
                </div>
            </NavLink>
            <NavLink
                to='/themlop'
                activeClassName='active'
                exact
            >
                <div className='item'>
                    <span>Thêm lớp</span>
                </div>
            </NavLink>
            <div className='ruler'></div>
        </Wrap>
    );
};

export default SideBar;