import Avatar from '@mui/material/Avatar';
import Button from "./Button";
import { useState } from 'react';
import Splitter from './Splitter';

const FriendsList = ({resources, handleUpdateAmount}) => {

    const [isSelected, setIsSelected] = useState(null)

    const [paidData, setPaidData] = useState({
        total : 0,
        machine : 0,
        friend : 0,
        paidPerson : ""
    })

    const handlePaidData = (e) => {

        const {name, value} = e.target

        setPaidData({
            ...paidData,
            [name] : value
        })
    }

    const handleIsSelect = (resource) => {
        setIsSelected(resource)
    }

    const handleCancel = () => {
        setIsSelected(null)
    }

    const handleSplit = () => {
        handleUpdateAmount(paidData, isSelected)
        setIsSelected(null)
    }

    return (
        <>
            <div className=" bg-red-400 w-[430px] p-1 rounded-xl ml-32">
                {
                    resources.map((resource) => {
                        return  (
                            <div className="flex items-center bg-orange-100 rounded-xl hover:bg-orange-200">
                                    <Avatar alt={resource.name} src={resource.imageUrl} className="!w-14 ml-2 !h-14"/>
                                    <div className="p-4 flex flex-col w-full">
                                        <p>{resource.name}</p>
                                        <p className='text-sm'>
                                            {resource.amount == 0 ? 
                                            <span>Split is even</span> : resource.amount > 0 ? 
                                            <span className='text-green-700'>Balance amount from machine is {resource.amount}</span> : 
                                            <span className='text-red-500'>Balance amount to machine {-resource.amount}</span>}</p>
                                    </div>
                                    <Button handleButtonFuntion={() => handleIsSelect(resource)} buttonName = "Select"/>
                            </div> 
                        ) 
                    })
                }
            </div>
            {isSelected != null && 
                <Splitter 
                    selectedResource={isSelected} 
                    handleCancel={handleCancel} 
                    handleSplit={handleSplit} 
                    handlePaidData={handlePaidData}
                />}
        </>
    )
}

export default FriendsList