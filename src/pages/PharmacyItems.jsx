import React from 'react'

export default function PharmacyItems() {
    const pharmacyItems = [
        {id:1, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: true },
        {id:2, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:3, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:4, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:5, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:6, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:7, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:8, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:9, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:10, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:12, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:13, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:14, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:15, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
        {id:16, name:'Napa', generic:'Paracetamol', category:'tablet', company:'Beximco Pharmaceutical', stock:'510', boxSize:'510', tp:'0.8', mrp:'1', header: false},
    ];
    
    const headers = Object.keys(pharmacyItems[0]).filter((key) => key !== 'header');
    console.log(headers);
  return (
    <div className='m-3'>
        <div>
            <h1>PharmacyItems</h1>
        </div>
        <div className='w-full'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {pharmacyItems.map((item) => (
                    <tr key={item.id}>
                        {headers.map((header) => (
                        <td
                            key={`${item.id}-${header}`}
                            className="px-6 py-4 whitespace-nowrap"
                        >
                            {item[header]}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
