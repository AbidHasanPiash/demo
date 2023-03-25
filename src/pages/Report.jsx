import { useState } from "react";

export default function Report() {
    const [selectedRow, setSelectedRow] = useState(null);
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
    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <button onClick={handleAdd}>Add Row</button>
                {selectedRow !== null && (
                    <>
                        <button onClick={() => setSelectedRow(null)}>Save</button>
                        <button onClick={() => handleDelete(data[selectedRow].id)}>
                            Delete
                        </button>
                    </>
                )}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id}>
                            <td>
                                {selectedRow === index ? (
                                    <input
                                        type="text"
                                        value={row.name}
                                        onChange={(event) => handleChange(event, index, "name")}
                                    />
                                ) : (
                                    row.name
                                )}
                            </td>
                            <td>
                                {selectedRow === index ? (
                                    <input
                                        type="text"
                                        value={row.age}
                                        onChange={(event) => handleChange(event, index, "age")}
                                    />
                                ) : (
                                    row.age
                                )}
                            </td>
                            <td>
                                {selectedRow === index ? (
                                    <>
                                        <button onClick={() => handleDelete(row.id)}>Delete</button>
                                    </>
                                ) : (
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
