import classes from './Header.module.css';

import auth from '../../store/auth/actions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../config/store';

const Header = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(auth.logout())
    }
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuthenticated &&
            <nav>
                <ul>
                    <li>
                        <a href="/">My Products</a>
                    </li>
                    <li>
                        <a href="/">My Sales</a>
                    </li>
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </nav>
            }
        </header>
    );
};

export default Header;
