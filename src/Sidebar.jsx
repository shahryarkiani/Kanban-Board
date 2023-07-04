import {AiOutlineHome, AiOutlineInfoCircle, AiFillCheckCircle} from 'react-icons/ai'
import {BsInboxes, BsPlusCircleDotted} from "react-icons/bs";
import {FaArrowsToDot} from "react-icons/fa6";
import {TbProgressBolt} from "react-icons/tb";

export default function Sidebar({openCreateModal}) {


    return (
        <>
            <div className='group fixed flex flex-col top-0 left-0 w-16 h-screen justify-center bg-slate-100 shadow-white-900 mr-16 hover:w-48 transition-all shadow-md shadow-black'>
                    <SidebarItem icon={<AiOutlineHome style={{color:'black', fontSize:'36'}} />} />
                    <SidebarItem onClick={openCreateModal} icon={<BsPlusCircleDotted style={{color:'black', fontSize:'28'}} />} />
                    <hr className='rounded-full mx-2 border border-2 mt-3 border-gray-400'/>
                    <SidebarItem icon={<BsInboxes style={{color:'black', fontSize:'28'}} />} />
                    <SidebarItem icon={<FaArrowsToDot style={{color:'black', fontSize:'28'}} />} />
                    <SidebarItem icon={<TbProgressBolt style={{color:'black', fontSize:'28'}} />} />
                    <hr className='rounded-full mx-2 mt-3 border border-2 border-gray-400'/>
                    <SidebarItem icon={<AiFillCheckCircle style={{color:'black', fontSize:'28'}} />} />
                    <div className='mt-auto  mb-3'>
                        <SidebarItem icon={<AiOutlineInfoCircle style={{color:'black', fontSize:'28'}} />} />
                    </div>

            </div>


        </>

    )
}


const SidebarItem = ({icon, onClick}) => (
        <>
            <button onClick={onClick}>
                <div className='flex h-12 w-12 items-center justify-center py-4 bg-slate-300 ml-2 mt-3 rounded-xl transition-all duration-200 hover:h-14 hover:w-14 hover:mt-2'>
                    {icon}

                </div>

            </button>
        </>
)

