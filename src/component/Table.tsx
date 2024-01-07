import React from 'react'
import TableRow from './TableRow'
import {TableData} from './TableFormData';


interface TableProps {
    data: TableData[];
    deleteData: (id: number) => void;
    editData: (id: number) => void;
}

export const Table: React.FC<TableProps> = ({ data, deleteData, editData }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableRow key={item.id} item={item} deleteData={deleteData} editData={editData} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
