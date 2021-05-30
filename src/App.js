import React, { useEffect } from 'react';
import dotenv from 'dotenv'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/GlobleStyle'
import { darkTheme } from './styles/theme'
import Auth from './components/Auth'
import RootRouter from './routers/index'
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from './reducers/user';


dotenv.config()

const App = () => {
    const dispatch = useDispatch()
    const { data: user } = useSelector(state => state.user)
    console.log(1)
    useEffect(() => {
        if (!user.email)
            dispatch(getMe())
    }, [dispatch, user.email])

    return (
        <ThemeProvider theme={darkTheme}>
            <ToastContainer
                autoClose={2500}
                position='top-right'
                closeButton={false}
            />
            <GlobalStyle />
            {user.token ? <RootRouter /> : <Auth />}
        </ThemeProvider>
    )
}

export default App;