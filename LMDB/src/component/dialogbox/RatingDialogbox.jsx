import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseButton from '../buttons/CloseButton';
import Button from '../buttons/Button';

const RatingDialogbox = ({open, handleClose, movieName}) => {

    return (
        <Dialog open={open}>
            <div className='w-[600px] h-[270px] flex flex-col'>
                <div className='flex'>
                    <div className='w-full flex p-2'>
                        <p className='text-6xl text-[#1560bd] ml-[260px]'>&#9734;</p>
                    </div>
                    <div className='ml-auto p-3 w-12'>
                        <CloseButton handleClose={handleClose}/>
                    </div>
                </div>
                <h3 className='mx-auto text-[#1560bd] text-xs p-1'>RATE THIS</h3>
                <h3 className='mx-auto text-xl p-1'>{movieName}</h3>
                <div className='text-xl mx-auto p-2'>
                    {
                    [...Array(10)].map((star, index) => {
                        index += 1;
                        return (
                        <button
                            type="button"
                            key={index}
                            // className={index <= (hover || rating) ? "on" : "off"}
                            // onClick={() => setRating(index)}
                            // onMouseEnter={() => setHover(index)}
                            // onMouseLeave={() => setHover(rating)}
                        >
                            <span className='p-1'>&#9734;</span>
                        </button>
                        );
                    })
                }
                </div>
                <div className='mx-auto mt-5'>
                    <Button name={"Rate"}></Button>
                </div>
            </div>
        </Dialog>
    )
}

export default RatingDialogbox