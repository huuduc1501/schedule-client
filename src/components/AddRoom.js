import React, { useState } from 'react';
import AddRoomModel from './AddRoomModel';

const AddRoom = () => {
    const [open,setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(true)}>Thêm phòng</button>
            {open && <AddRoomModel setOpen={setOpen} />}
        </>
    );
};

export default AddRoom;