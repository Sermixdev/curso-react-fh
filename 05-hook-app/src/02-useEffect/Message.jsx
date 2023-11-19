import { useEffect } from 'react';

export const Message = () => {

    

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { y, x };
            console.log(coords);
        };
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    );
};
