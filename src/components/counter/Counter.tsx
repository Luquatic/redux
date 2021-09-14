import classes from './Counter.module.css';

// redux
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../config/store';
import counter from '../../store/counter/actions';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.counter.value);
    const toggle = useSelector((state: RootState) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counter.increment());
    };

    const increaseHandler = () => {
        dispatch(counter.increase(5));
    };

    const decrementHandler = () => {
        dispatch(counter.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counter.setVisibility());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {toggle &&
            <div className={classes.value}>{value}</div>
            }
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
