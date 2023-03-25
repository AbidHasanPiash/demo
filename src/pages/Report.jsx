import { useState } from "react";

export default function Report() {
    const [data, setData] = useState([
      { id: 1, name: "John Doe", age: 25 },
      { id: 2, name: "Jane Doe", age: 30 },
      { id: 3, name: "Bob Smith", age: 40 },
    ]);
  
    const handleEdit = (id, key, value) => {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
      setData(updatedData);
    };
  
  return (
    <div>
        Report
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id}>
                    <td
                    contentEditable
                    onBlur={(e) =>
                        handleEdit(item.id, "name", e.target.textContent)
                    }
                    >
                    {item.name}
                    </td>
                    <td
                    contentEditable
                    onBlur={(e) =>
                        handleEdit(item.id, "age", parseInt(e.target.textContent))
                    }
                    >
                    {item.age}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>    
    </div>
  )
}
