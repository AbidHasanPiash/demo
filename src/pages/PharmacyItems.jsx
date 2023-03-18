import React from 'react'

export default function PharmacyItems() {
    const pharmacyItems = [
        {id:1, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:2, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:3, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:4, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:5, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:6, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:7, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:8, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:9, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:10, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:12, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:13, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:14, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:15, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
        {id:16, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1'},
    ]
  return (
    <div>
        <div>
            <h1>PharmacyItems</h1>
        </div>
        <div>
            <table>
                <thead>
                    <th>SN</th>
                    <th>Name</th>
                    <th>Generic</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th>Stock</th>
                    <th>Box Size</th>
                    <th>MRP</th>
                    <th>TP</th>
                </thead>
                <tbody>
                    {pharmacyItems.map((item, index)=>(
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.generic}</td>
                            <td>{item.category}</td>
                            <td>{item.company}</td>
                            <td>{item.stock}</td>
                            <td>{item.boxSize}</td>
                            <td>{item.mrp}</td>
                            <td>{item.tp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
