// export const FirstApp = () => <h2>Sergio</h2>;

// Retornar Fragmento de componente
const getResult = () => {
    return 4 + 4;
};
export const FirstApp = () => {
    return (
        <>
            <h1>{getResult()}</h1>
            {/* 
            <code>{JSON.stringify(newMessage)}</code> 
            */}
            <h2>Soy un subtítulo</h2>
        </>
    );
};
