import React, {Fragment} from 'react';

// components
import Counter from './components/counter/Counter';
import Header from './components/header/Header';
import Auth from './components/auth/Auth';
import UserProfile from './components/profile/UserProfile';

// redux
import {useSelector} from 'react-redux';
import {RootState} from './config/store';

function App() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <Fragment>
            <Header/>
            {!isAuthenticated && <Auth/>}
            {isAuthenticated && <UserProfile/>}
            <Counter/>
        </Fragment>
    );
}

export default App;
