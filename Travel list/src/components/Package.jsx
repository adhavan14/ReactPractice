import { Checkbox } from "@mui/material"

const Package = ({packageList, toggleItemStatus}) => {

    return (
        <div className="bg-[#fefe80] h-[600px]">
            <div className="flex justify-center mx-auto w-full p-5">
                <ul className="grid grid-cols-4 gap-4">
                    {packageList && packageList.map((item, index) => (
                        <div className={`flex items-center ${item.isDone ? 'line-through' : ''}`}>
                            <Checkbox onChange={() => {toggleItemStatus(index)}}></Checkbox>
                            <li key={index}> {item.quantity} : {item.item}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Package