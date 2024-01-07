import React from 'react'
import { TableData } from './TableFormData';
// import { DeleteIcon } from '@remixicon/react'
import { RiDeleteBinFill } from "@remixicon/react";
import {RiEditFill} from '@remixicon/react';


interface TableRowProps {
    item: TableData;
    deleteData: (id: number) => void;
    editData: (id: number) => void;
}
const TableRow: React.FC<TableRowProps> = ({ item, deleteData, editData }) => {
    return (
        <>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                    <button className='editBtn' onClick={() => editData(item.id)}><RiEditFill/></button>
                    <button className='deleteBtn' onClick={() => deleteData(item.id)}><RiDeleteBinFill /></button>
                </td>
            </tr>
        </>
    )
}

export default TableRow

// const MyComponent = () => {
//     return (
//         <RiHeartFill
//             // size={36} // set custom `width` and `height`
//             // color="red" // set `fill` color
//             // className="my-icon" // add custom class name
//         />
//     );
// };