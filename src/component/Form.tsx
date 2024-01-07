import React, { ChangeEvent, FormEvent } from 'react'

interface FormProps {
    formData: { name: string, age: string };
    setFormData: React.Dispatch<React.SetStateAction<{ name: string; age: string }>>;
    editDataId: number | null;
    createTable: (e: FormEvent) => void;
    updateRow: () => void;
}

export const Form: React.FC<FormProps> = ({ formData, setFormData, editDataId, createTable, updateRow }) => {
    return (
        <div>
            <form
                onSubmit={(elem: FormEvent) => {
                    elem.preventDefault();
                    if (editDataId !== null) {
                        updateRow()
                    } else {
                        createTable(elem)
                    }
                }}
                className='create-form' >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name='name'
                    value={formData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                    required />
                <label htmlFor="age">Age</label>
                <input type="number"
                    id="age"
                    name='age'
                    value={formData.age}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, age: e.target.value })}
                    required />
                <input type="hidden" id="edit-id" />
                <button className='submitBtn' type="submit">{editDataId !== null ? "Updated" : "Create"}</button>
            </form>
        </div>
    )
}
