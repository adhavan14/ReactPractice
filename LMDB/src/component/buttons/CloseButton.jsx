import CloseIcon from '@mui/icons-material/Close';

const CloseButton = ({handleClose}) => {

    return (
        <button onClick={handleClose} className='hover:bg-gray-300 rounded-lg'><CloseIcon/></button>
    )
}

export default CloseButton