import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Loco']);
    const onAddCategory = (newCategory) => {
        // categories.push('Valorant) ESTA FORMA NO ES CORRECTA PORQUE PROVOCA MUTACION
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant'])
    };
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
