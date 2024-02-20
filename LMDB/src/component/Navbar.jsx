import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import './../App.css' 
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Navbar = () => {
    
    return (
        <div>
            <AppBar position="static" className='!bg-gradient-to-r from-indigo-500 to-[#1560bd]'>
            <Toolbar className=''>
                <div>    
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        HOME
                    </IconButton>
                </div>
                <div className='flex items-center p-2 h-10 !border-white border-[1px] w-1/4 ml-auto rounded-md'>
                    <SearchIcon/>
                    <input placeholder='Movies...' className='p-2 !w-full bg-transparent !border-none outline-none'>
                    </input>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar