import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Loco']);
    const onAddCategory = () => {
        // categories.push('Valorant) ESTA FORMA NO ES CORRECTA PORQUE PROVOCA MUTACION
        setCategories(['Valorant', ...categories]);
        // setCategories(cat => [...cat, 'Valorant'])
    };
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory setCategories={setCategories} />
            {/* Listado de gif */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
            {/* Gif Item */}
        </>
    );
};
