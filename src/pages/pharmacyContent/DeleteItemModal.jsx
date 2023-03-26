import React from 'react'
import useFetch from '../../hooks/useFetch'

export default function DeleteItemModal({deleteableId, onClose}) {
    const { isLoading, data: Item, error, } = useFetch(`http://localhost:8000/medicines/` + deleteableId);
    isLoading && <div>Loading...</div>;
    error && <div>Error: {error.message}</div>;
    (!Item || !Item?.length) && <div>No data found</div>;
    console.log(Item);

    const handelDelete = (e)=> {
        e.preventDefault();
        fetch('http://localhost:8000/medicines/' + deleteableId, {
            method:'DELETE'
        }).then(()=>{
            console.log("item deleted")
            onClose();
            e.preventDefault();
        })
    }
  return (
    <div className="absolute top-1/4 w-96 h-52 flex items-center justify-center bg-slate-500">
        <button className="absolute top-0 right-0" onClick={onClose}>close</button>
        <div className='w-full h-7 border'>
            <p>Delete for {Item?.name}</p>
            <button onClick={handelDelete}>delete</button>
        </div>
    </div>
  )
}
