import {AiOutlineHome, AiOutlineInfoCircle, AiFillCheckCircle} from 'react-icons/ai'
import {BsInboxes, BsPlusCircleDotted} from "react-icons/bs";
import {FaArrowsToDot} from "react-icons/fa6";
import {TbProgressBolt} from "react-icons/tb";

export default function Sidebar({openCreateModal}) {


    return (
        <>
            <div className='group fixed flex flex-col top-0 left-0 w-16 h-screen justify-center bg-slate-800 shadow-white-900 mr-16 hover:w-48 transition-all shadow-md shadow-black'>
                    <SidebarItem icon={<AiOutlineHome style={{color:'white', fontSize:'36'}} />} />
                    <SidebarItem onClick={openCreateModal} icon={<BsPlusCircleDotted style={{color:'white', fontSize:'28'}} />} />
                    <hr className='rounded-full mx-2 border border-2 mt-3'/>
                    <SidebarItem icon={<BsInboxes style={{color:'white', fontSize:'28'}} />} />
                    <SidebarItem icon={<FaArrowsToDot style={{color:'white', fontSize:'28'}} />} />
                    <SidebarItem icon={<TbProgressBolt style={{color:'white', fontSize:'28'}} />} />
                    <hr className='rounded-full mx-2 mt-3 border border-2'/>
                    <SidebarItem icon={<AiFillCheckCircle style={{color:'white', fontSize:'28'}} />} />
                    <div className='mt-auto  mb-3'>
                        <SidebarItem icon={<AiOutlineInfoCircle style={{color:'white', fontSize:'28'}} />} />
                    </div>

            </div>


        </>

    )
}


const SidebarItem = ({icon, onClick}) => (
        <>
            <button onClick={onClick}>
                <div className='flex h-12 w-12 items-center justify-center py-4 bg-slate-500 ml-2 mt-3 rounded-xl hover:brightness-150 transition-all duration-200 hover:h-14 hover:w-14 hover:mt-2'>
                    {icon}

                </div>

            </button>
        </>
)

