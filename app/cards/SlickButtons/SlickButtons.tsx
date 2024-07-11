import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export  const NextArrow = ({ onClick }: any) => {
    return (
        <IconButton
            onClick={onClick}
            className='customArrowNext'
            // style={{ position: 'absolute', top: '50%', right: '-20px', transform: 'translateY(-50%)', zIndex: 1 }}
        >
            <ArrowForwardIosIcon sx={{ fontSize: '25px' }} />
        </IconButton>
    );
};

export const PrevArrow = ({ onClick }: any) => {
    return (
        <IconButton
            onClick={onClick}
            className='customArrowPrev'
            // style={{ position: 'absolute', top: '50%', left: '-20px', transform: 'translateY(-50%)', zIndex: 1 }}
        >
            <ArrowBackIosIcon sx={{ fontSize: '25px' }} />
        </IconButton>
    );
};



