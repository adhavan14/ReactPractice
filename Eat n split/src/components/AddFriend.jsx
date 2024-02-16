import { TextField } from "@mui/material"
import { useState } from "react"

const AddFriend = ({handleAddResources, handleInputData, inputData}) => {

    
    return (
        <div className="flex flex-col w-60">
            <div className="p-2 grid grid-2 gap-2">
                <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={inputData.name} onChange={handleInputData}/>
                <TextField id="outlined-basic" label="Image url" variant="outlined" name="imageUrl" value={inputData.imageUrl} onChange={handleInputData}/>
            </div>
            <button className="bg-orange-400 w-[226px] mx-auto rounded-lg text-sm p-2  hover:bg-orange-300" onClick={handleAddResources}>Add friend</button>
        </div>
    )
}

export default AddFriend