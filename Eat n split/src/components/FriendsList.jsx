import Avatar from '@mui/material/Avatar';
import SelectButton from "./SelectButton";

const FriendsList = ({resources}) => {

    return (
      
            <div className=" bg-red-400 w-[400px] p-1 rounded-xl">
                {
                    resources.map((resource) => {
                        return  <div className="flex items-center bg-orange-100 rounded-xl">
                                    <Avatar alt={resource.name} src={resource.imageUrl} className="!w-14 ml-2 !h-14"/>
                                    <div className="p-4 flex flex-col w-full">
                                        <p>{resource.name}</p>
                                        <p>{resource.amount}</p>
                                    </div>
                                    <SelectButton/>
                                </div>
                    })
                }
            </div>
        
    )
}

export default FriendsList