import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div`
    height: 60px;
    width: 100vw;
    background: ${props => props.theme.grey};
    position: fixed;
    top: 0;
    left: 0;
`

const NavBar = () => {
    return (
        <Wrap>
        </Wrap>
    );
};

export default NavBar;