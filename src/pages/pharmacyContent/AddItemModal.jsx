import React, { useState } from "react";

export default function AddItemModal({onClose}) {
    const [name, setName] = useState('');
    const [generic, setGeneric] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [stock, setStock] = useState('');
    const [boxSize, setBoxSize] = useState('');
    const [tp, setTp] = useState(0);
    const [mrp, setMrp] = useState(0);
    const handleSubmit = (e) => {
        const item = {name, generic, category, company, stock, boxSize, tp, mrp};
        e.preventDefault();
        fetch('http://localhost:8000/medicines', {
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(item)
        }).then(()=>{
            e.preventdeDault();
            console.log("New item added")
            onClose();
        })
    }
  return (
    <div className="absolute top-1/4 w-2/3 flex items-center justify-center bg-slate-500">
      <button
        className="absolute top-0 right-0"
        onClick={() => onClose()}
      >
        close
      </button>
      <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center">
        <label htmlFor="">name</label>
        <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="">generic</label>
        <input type="text" required value={generic} onChange={(e)=>setGeneric(e.target.value)} />
        <label htmlFor="">category</label>
        <input type="text" required value={category} onChange={(e)=>setCategory(e.target.value)} />
        <label htmlFor="">company</label>
        <input type="text" required value={company} onChange={(e)=>setCompany(e.target.value)} />
        <label htmlFor="">stock</label>
        <input type="text" required value={stock} onChange={(e)=>setStock(e.target.value)} />
        <label htmlFor="">boxSize</label>
        <input type="text" required value={boxSize} onChange={(e)=>setBoxSize(e.target.value)} />
        <label htmlFor="">tp</label>
        <input type="text" required value={tp} onChange={(e)=>setTp(e.target.value)} />
        <label htmlFor="">mrp</label>
        <input type="text" required value={mrp} onChange={(e)=>setMrp(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
