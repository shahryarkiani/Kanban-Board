import {useState} from 'react'


export default function useLocalStorage(key, initValue) {


    let storedItem = window.localStorage.getItem(key)

    if(storedItem === null)
        storedItem = initValue
    else
        storedItem = JSON.parse(storedItem)

    const [item, setItem] = useState(storedItem)

    const setItemWrapped = (newItem) => {

        window.localStorage.setItem(key, JSON.stringify(newItem))

        setItem(newItem)

    }

    return [item, setItemWrapped]

}