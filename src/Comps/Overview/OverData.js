import {AiFillDatabase} from 'react-icons/ai';
import {MdOutlineApproval} from 'react-icons/md';
import {RiComputerFill} from 'react-icons/ri';
import {BsTrashFill} from 'react-icons/bs';
import {MdOutlinePendingActions} from 'react-icons/md';

const overdata=[
    {
        icons:<AiFillDatabase/>,
        numbers:"2.3k",
        action:"total request",
        percent:"100%"
    },
    {
        icons:<MdOutlineApproval/>,
        numbers:"823",
        action:"total approval",
        percent:"90%"
    },
    {
        icons:<RiComputerFill/>,
        numbers:"2.9k",
        action:"pending quotation",
        percent:"70%"
    },
    {
        icons:<BsTrashFill/>,
        numbers:"200k",
        action:"rejected quotation",
        percent:"60%"
    },
    {
        icons:<MdOutlinePendingActions/>,
        numbers:"120k",
        action:"under review process",
        percent:"50%"
    }
]
export default overdata;