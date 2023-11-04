import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ title, value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleDel = () => setCounter(counter - 1);
    const handleRes = () => setCounter(value);

    return (
        <>
            <h1>{title}</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleDel}>-1</button>
            <button onClick={handleRes}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
    title: 'No hay titulo',
    value: 0,
};
