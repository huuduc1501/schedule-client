import React, { useEffect } from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../reducers/user';

const Wrap = styled.div`
    height: 100vh;
    width: 240px;
    background: ${props => props.theme.grey};
    position: fixed;
    top: 60px;
    left: 0;
    overflow: auto;
    padding-top: 1.5rem;

    h3 {
        padding: .4rem 0 .4rem 1.5rem;
    }

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
    const { isFetching, data: user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe({ token: user.token }))
    }, [dispatch, user.token])

    // if (isFetching)
    //     return null
    return (
        <Wrap>
            <NavLink
                to='/'
                activeClassName='active'
                exact
            >
                <div className='item'>
                    <span>Trang chủ</span>
                </div>
            </NavLink>
            <NavLink
                to='/themcum'
                activeClassName='active'
                exact
            >
                <div className='item'>
                    <span>Tạo cụm mới</span>
                </div>
            </NavLink>
            {/* <NavLink
                to='/themlop'
                activeClassName='active'
                exact
            >
                <div className='item'>
                    <span>Thêm lớp</span>
                </div>
            </NavLink> */}
            {/* <NavLink
                to='/test'
                activeClassName='active'
                exact
            >
                <div className='item'>
                    <span>Test</span>
                </div>
            </NavLink> */}
            <div className='ruler'></div>
            <h3>Các cụm của tôi</h3>
            {user.clusterList?.map(cluster => {
                return <NavLink to={`${cluster.id}`} >
                    <div className='item'>
                        <span>{cluster.name}</span>
                    </div>
                </NavLink>
            })}
        </Wrap>
    );
};

export default SideBar;