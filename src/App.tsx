import React, { useState, useEffect, FormEvent } from 'react'
import { Style } from './component/style';
import { Form } from './component/Form';
import { Table } from './component/Table';
import { TableData } from './component/TableFormData';
import { FormData } from './component/TableFormData';



function App() {
  const generateRandomId = () => Math.floor(Math.random() * 1000);
  const getStoreData: string | null = localStorage.getItem("storeTableData")
  const storeData: TableData[] = getStoreData ? JSON.parse(getStoreData) : [];
  const [data, setData] = useState<TableData[]>(storeData);
  const [formData, setFormData] = useState<FormData>({ name: '', age: '' })
  const [editDataId, setEditDataId] = useState<number | null>(null);

  const id: number = generateRandomId()
  const createTable = (e: FormEvent) => {
    setData(data.concat({ id, ...formData }),)
    setFormData({ name: "", age: "" });
  }

  useEffect(() => {
    localStorage.setItem("storeTableData", JSON.stringify(data));
  }, [data])


  const deleteData = (id: number) => {
    const removeData = data.filter((item) => item.id !== id);
    setData(removeData)
    localStorage.setItem("storeTableData", JSON.stringify(data));
  }

  const editData = (id: number) => {
    const rowToEdit = data.find(item => item.id === id);
    console.log(rowToEdit)
    if (rowToEdit) {
      setFormData({ name: rowToEdit.name, age: rowToEdit.age });
      setEditDataId(id);
    }
  }

  const updateRow = () => {
    const updatedData = data.map((item) =>
      item.id === editDataId ? { id: editDataId, ...formData } : item);
    setData(updatedData);
    localStorage.setItem("storeTableData", JSON.stringify(data));
    setEditDataId(null);
    setFormData({ name: "", age: "" });
  }


  return (
    <>
      <Style>
        <h1>CRUD Operation Using React</h1>
        <div>
          <Form formData={formData}
            setFormData={setFormData}
            editDataId={editDataId}
            createTable={createTable}
            updateRow={updateRow} />

          <Table data={data}
            deleteData={deleteData}
            editData={editData} />
        </div>
      </Style>
    </>
  );
}

export default App;
