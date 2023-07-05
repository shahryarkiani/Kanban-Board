import {AiOutlineHome, AiOutlineInfoCircle, AiFillCheckCircle} from 'react-icons/ai'
import {BsInboxes} from "react-icons/bs";
import {FaArrowsToDot} from "react-icons/fa6";
import {TbProgressBolt} from "react-icons/tb";
import {MdOutlineCreate} from 'react-icons/md'
import {Link} from 'react-router-dom'

export default function Sidebar({openCreateModal}) {


    return (
        <>
            <div className='group fixed flex flex-col top-0 left-0 w-16 h-screen justify-center bg-slate-100 shadow-white-900 mr-16 hover:w-48 transition-all shadow-md shadow-black overflow-hidden'>


                    <SidebarItem text={'Home'} link={'/'} icon={<AiOutlineHome style={{color:'black', fontSize:'36'}} />} />


                    <SidebarItem text={'Create'} onClick={openCreateModal} icon={<MdOutlineCreate style={{color:'black', fontSize:'28'}} />} />
                    <hr className='rounded-full mx-2 border border-2 mt-3 border-gray-400'/>
                    <SidebarItem text={'Backlog'} link={'/backlog'} icon={<BsInboxes style={{color:'black', fontSize:'28'}} />} />
                    <SidebarItem text={'To-Do'}link={'/todo'}  icon={<FaArrowsToDot style={{color:'black', fontSize:'28'}} />} />
                    <SidebarItem text={'In Progress'}link={'/inprogress'}  icon={<TbProgressBolt style={{color:'black', fontSize:'28'}} />} />
                    <hr className='rounded-full mx-2 mt-3 border border-2 border-gray-400'/>
                    <SidebarItem text={'Done'} link={'/done'}  icon={<AiFillCheckCircle style={{color:'black', fontSize:'28'}} />} />
                    <div className='mt-auto  mb-3'>
                        <SidebarItem text={'Info'} icon={<AiOutlineInfoCircle style={{color:'black', fontSize:'28'}} />} />
                    </div>

            </div>


        </>

    )
}


const SidebarItem = ({icon, onClick, link, text}) => (
        <div className='flex w-48 items-center mt-3'>
            <button onClick={onClick}>

                <Link to={link}>
                    <div className='block flex h-12 w-12 items-center justify-center py-4 bg-slate-300 ml-2 rounded-xl transition-all duration-200 hover:h-14 hover:w-14 hover:mt-2'>
                        {icon}

                    </div>
                </Link>



            </button>

            <Link to={link}>
                <h2 className='ml-4 font-bold text-lg'>{text}</h2>
            </Link>

        </div>
)

