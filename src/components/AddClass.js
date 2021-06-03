import React, { useState } from 'react';
import AddClassModel from './AddClassModel';

const AddClass = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(true)}>Thêm lớp</button>
            {open && <AddClassModel setOpen={setOpen} />}
        </>
    );
};

export default AddClass;