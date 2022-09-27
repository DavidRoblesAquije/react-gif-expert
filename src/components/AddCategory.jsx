import { useState } from "react"

export const AddCategory = ({ on_NewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //no retornar nada si es de 1 caracter o menos
        if (inputValue.trim().length <= 1) return;

        //agregar categoria a la lista
        // setCategories(categories => [inputValue, ...categories])
        on_NewCategory(inputValue.trim());

        // limpieza de imput
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input
                    type="text"
                    placeholder="Buscar Gifts"
                    value={inputValue}
                    onChange={(event) => onInputChange(event)} />
            </form>

        </>
    )
}
