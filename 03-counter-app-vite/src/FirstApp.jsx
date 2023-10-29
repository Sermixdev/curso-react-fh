const newMessage = {
    message: 'Hola mundo',
    tittle: 'Sergio',
};

const getSaludo = () => {
    return 'SALUDITOSSSS';
};

export function FirstApp({ title }) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{getSaludo()}</h2>
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <p>Parrafo</p>
        </>
    );
}
