import { useState } from "react";

export default function Report() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [data, setData] = useState([
        { id: 1, name: "John Doe", age: 25 },
        { id: 2, name: "Jane Smith", age: 30 },
        { id: 3, name: "Bob Johnson", age: 45 },
    ]);

    const handleEdit = (index) => {
        setSelectedRow(index);
    };

    const handleDelete = (index) => {
        setData(data.filter((row) => row.id !== index));
        setSelectedRow(null);
        setIsEditable(false);
    };

    const handleAdd = () => {
        setData([...data, { id: data.length + 1, name: "", age: "" }]);
        setSelectedRow(data.length);
    };

    const handleChange = (event, index, key) => {
        setData([
            ...data.slice(0, index),
            {
                ...data[index],
                [key]: event.target.value,
            },
            ...data.slice(index + 1),
        ]);
    };






    const [peopleObject, setPeopleObject] = useState({
        "John": 25,
        "Jane": 30,
        "Bob": 40
      });
    const [currentName, setCurrentName] = useState(Object.keys(peopleObject)[0]); // set initial value to first key in the object
    const [currentAge, setCurrentAge] = useState(peopleObject[Object.keys(peopleObject)[0]]); // set initial value to first value in the object
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedPeopleObject = { ...peopleObject }; // create a copy of the original object
        updatedPeopleObject[currentName] = currentAge; // update the value for the corresponding key
        setPeopleObject(updatedPeopleObject); // update the state variable
      };

    return (
        <div className="mt-32 flex flex-col items-center justify-center">
            <div className=" flex items-center justify-center space-x-3">
                <button onClick={handleAdd}>Add</button>
                <button onClick={() => setIsEditable(true)}>Edit</button>
                <button onClick={() => {setSelectedRow(null); setIsEditable(false);}}>Save</button>
                <button onClick={() => {setSelectedRow(null); setIsEditable(false);}}>Cancel</button>
                {isEditable && selectedRow !== null && (
                    <>
                        <button onClick={() => handleDelete(data[selectedRow].id)}> Delete </button>
                    </>
                )}
            </div>
            <table className="w-1/2 table-auto border divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={row.id} onClick={() => {handleEdit(index); console.log(selectedRow);}}>
                            <td className={`${selectedRow === index && 'bg-yellow-300'}`}>
                                {isEditable && selectedRow === index ? (
                                    <input
                                        type="text"
                                        value={row.name}
                                        onChange={(event) => handleChange(event, index, "name")}
                                    />
                                ) : (
                                    row.name
                                )}
                            </td>
                            <td className={`${selectedRow === index && 'bg-yellow-300'}`}>
                                {isEditable && selectedRow === index ? (
                                    <input
                                        type="text"
                                        value={row.age}
                                        onChange={(event) => handleChange(event, index, "age")}
                                    />
                                ) : (
                                    row.age
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={currentName} onChange={(event) => setCurrentName(event.target.value)} />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" value={currentAge} onChange={(event) => setCurrentAge(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}