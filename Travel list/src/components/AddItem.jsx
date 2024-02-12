import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Package from './Package';
import Status from './Status';

const AddItem = () => {

    const [inputData, setInputData] = useState({
        item : "",
        quantity : 1,
        isDone : false
    })

    const [packedItem, setpackedItem] = useState(0)

    const [isSubmit, setIsSubmit] = useState(false)

    const [packageList, setPackageList] = useState(new Array())

    const handleInputData = (e) => {
        setIsSubmit(false)
        const { name, value } = e.target;
            setInputData({
            ...inputData,
            [name]: value,
        });
    }

    const handleSubmit = () => {
        setPackageList(items => [...items, inputData])
        setIsSubmit(true)
    }

    const toggleItemStatus = (index) => {
        
        const tempPackageList = [...packageList]
        tempPackageList[index].isDone = !tempPackageList[index].isDone

        if (tempPackageList[index].isDone) {
            setpackedItem(packedItem + 1)
        } else {
            setpackedItem(packedItem - 1)
        }

        setPackageList(tempPackageList)
        console.log(packageList.length)
    }

    return (
        <>
            <form className='bg-[#559ef8]' onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
                <div className='flex justify-center items-center'>
                    <div>
                        <h2 className='text-2xl'>
                            what do you need for your &#128525; trip ?
                        </h2>
                    </div>
                    <div className='p-4 w-1/4'>
                        <TextField 
                            id="outlined-basic" 
                            label="Item" 
                            name='item'
                            value={isSubmit ? "" : inputData.item}
                            variant="outlined"
                            onChange={handleInputData}
                            className='w-full'
                            sx={{
                                "& .MuiInputLabel-root": {
                                    color: "black",
                                },
                                "& .MuiOutlinedInput-root": {
                                  "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                  },
                                },
                             }} 
                        />
                    </div>
                    <div className='p-4 w-32'>
                        <TextField 
                            inputProps={{ type: 'number', min :1}} 
                            value={inputData.quantity}
                            name='quantity'
                            onChange={handleInputData}
                            sx={{
                                "& .MuiInputLabel-root": {
                                    color: "black",
                                },
                                "& .MuiOutlinedInput-root": {
                                  "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                  },
                                },
                             }} 
                        />
                    </div>
                    <div className='p-4'>
                        <Button 
                            variant="contained" 
                            type='submit' 
                            className='h-14 !bg-[white] !text-black'>
                         Add
                        </Button>
                    </div>
                </div>
            </form>
            <Package packageList = {packageList} toggleItemStatus = {toggleItemStatus}/>
            <Status packageList = {packageList} packedItem = {packedItem}/>
        </>
        
    )
}

export default AddItem