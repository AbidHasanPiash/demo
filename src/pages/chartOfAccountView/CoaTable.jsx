import { useEffect, useState } from "react";
import { useTable, useExpanded, useSortBy, useGlobalFilter, useFilters } from "react-table";
import FilterGlobal from "./FilterGlobal";

export default function CoaTable({ columns, data, updateMyData }) {
    // Create an editable cell renderer
    const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, // This is a custom function that we supplied to our table instance
    }) => {
        // We need to keep and update the state of the cell normally
        const [value, setValue] = useState(initialValue);

        const onChange = (e) => {
            setValue(e.target.value);
        };

        // We'll only update the external data when the input is blurred
        const onBlur = () => {
            updateMyData(index, id, value);
        };

        // If the initialValue is changed external, sync it up with our state
        useEffect(() => {
            setValue(initialValue);
        }, [initialValue]);

        return <input value={value} onChange={onChange} onBlur={onBlur} />;
    };

    // Set our editable cell renderer as the default Cell renderer
    const defaultColumn = {
        Cell: EditableCell,
    };
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { expanded, globalFilter },
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            updateMyData,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useExpanded, // Use the useExpanded plugin hook
    );

    return (
        <>
            <FilterGlobal filter={globalFilter} setFilter={setGlobalFilter}/>
            <table
                {...getTableProps()}
                className="min-w-full table-fixed border-collapse divide-y divide-gray-200"
            >
                <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="w-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {column.render("Header")}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                    </span>
                                    <div>{column.canFilter ? column.render('Filter'):null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-gray-200"
                >
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            className={`${row.isExpanded && "bg-slate-500"
                                                } px-6 whitespace-nowrap`}
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br />
            <div>Showing the first 20 results of {rows.length} rows</div>
            <pre>
                <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
            </pre>
        </>
    );
}
