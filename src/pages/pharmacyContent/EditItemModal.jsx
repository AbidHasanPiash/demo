import { useState, useEffect  } from 'react';
//import useFetch from '../../hooks/useFetch';

export default function EditItemModal({editableId, onClose}) {
    // const { isLoading, data: Item, error, } = useFetch(`http://localhost:8000/medicines/` + editableId);
    // isLoading && <div>Loading...</div>;
    // error && <div>Error: {error.message}</div>;
    // (!Item || !Item?.length) && <div>No data found</div>;
    // const [name, setName] = useState(data?.name);
    // const [generic, setGeneric] = useState(data?.generic);
    // const [category, setCategory] = useState(data?.category);
    // const [company, setCompany] = useState(data?.company);
    // const [stock, setStock] = useState(data?.stock);
    // const [boxSize, setBoxSize] = useState(data?.boxSize);
    // const [tp, setTp] = useState(data?.tp);
    // const [mrp, setMrp] = useState(data?.mrp);
    // const nameInputRef = useRef(null);
    // const genericInputRef = useRef(null);
    // const categoryInputRef = useRef(null);
    // const companyInputRef = useRef(null);
    // const stockInputRef = useRef(null);
    // const boxSizeInputRef = useRef(null);
    // const tpInputRef = useRef(null);
    // const mrpInputRef = useRef(null);
    // const handleEdit = ()=> {
    // }
    // const handelSubmit = (e)=> {
    //     setName(nameInputRef.current.value);
    //     const item = {name, generic, category, company, stock, boxSize, tp, mrp};
    //     e.preventDefault();
    //     fetch('http://localhost:8000/medicines/' + editableId, {
    //         method:'PUT',
    //         headers: {'Content-Type' : 'application/json'},
    //         body: JSON.stringify(item)
    //     }).then(()=>{
    //         e.preventdeDault();
    //         console.log("item Updated!!")
    //         onClose();
    //     })
    // }
    const endpoint = `http://localhost:8000/medicines/` + editableId;
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(endpoint)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error(error));
    }, [endpoint]);
    const handleInputChange = (n, v) => {
        setData({ ...data, [n]: v });
    };
    const handleSaveClick = () => {
    fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
    };
  return (
    <div className="absolute top-1/4 w-2/3 flex items-center justify-center bg-slate-500">
        <button className="absolute top-0 right-0" onClick={onClose}>close</button>
        <form onSubmit={handleSaveClick} className="flex flex-col items-start justify-center">
            <label htmlFor="">name</label>
            <input type="text" name='name' id='name' defaultValue={data?.name} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <label htmlFor="">generic</label>
            <input type="text" name='generic' id='generic' defaultValue={data?.generic} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <label htmlFor="">category</label>
            <input type="text" name='category' id='category' defaultValue={data?.category} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <label htmlFor="">company</label>
            <input type="text" name='company' id='company' defaultValue={data?.company} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <label htmlFor="">stock</label>
            <input type="text" name='stock'id='stock' defaultValue={data?.stock} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <label htmlFor="">boxSize</label>
            <input type="text" name='boxSize' id='boxSize' defaultValue={data?.boxSize} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <label htmlFor="">tp</label>
            <input type="text" name='tp' id='tp' defaultValue={data?.tp} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <label htmlFor="">mrp</label>
            <input type="text" name='mrp' id='mrp' defaultValue={data?.mrp} onChange={(event)=>handleInputChange(event.target.name, event.target.value)} />
            <button type="submit">Edit Save</button>
        </form>
    </div>
  )
}
