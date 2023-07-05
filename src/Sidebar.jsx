import {AiOutlineHome, AiOutlineInfoCircle, AiFillCheckCircle} from 'react-icons/ai'
import {BsInboxes} from "react-icons/bs";
import {FaArrowsToDot} from "react-icons/fa6";
import {TbProgressBolt} from "react-icons/tb";
import {MdOutlineCreate} from 'react-icons/md'

export default function Sidebar({openCreateModal, cols, setCols}) {


    return (
        <>
            <div className='group fixed flex flex-col top-0 left-0 w-16 h-screen justify-center bg-slate-100 shadow-white-900 mr-16 hover:w-48 transition-all shadow-md shadow-black overflow-hidden'>




                    <SidebarItem text={'Create'} onClick={openCreateModal} icon={<MdOutlineCreate style={{color:'black', fontSize:'28'}} />} />
                    <hr className='rounded-full mx-2 border border-2 mt-3 border-gray-400'/>
                    <SidebarItem text={'Backlog'}  icon={<BsInboxes style={{color:'black', fontSize:'28'}} />} cols={cols} setCols={setCols} index={0} />
                    <SidebarItem text={'To-Do'}  icon={<FaArrowsToDot style={{color:'black', fontSize:'28'}} />} cols={cols} setCols={setCols} index={1} />
                    <SidebarItem text={'In Progress'}  icon={<TbProgressBolt style={{color:'black', fontSize:'28'}} />} cols={cols} setCols={setCols} index={2} />
                    <SidebarItem text={'Done'}   icon={<AiFillCheckCircle style={{color:'black', fontSize:'28'}} />} cols={cols} setCols={setCols} index={3} />
                    <hr className='rounded-full mx-2 mt-3 border border-2 border-gray-400'/>

                    <div className='mt-auto  mb-3'>
                        <SidebarItem text={'Info'} icon={<AiOutlineInfoCircle style={{color:'black', fontSize:'28'}} />} />
                    </div>


            </div>


        </>

    )
}


const SidebarItem = ({icon, onClick, text, cols, setCols, index}) => {

    let bgColor = ' bg-slate-300'
    if(cols)
        bgColor = cols[index] ? ' bg-lime-500' : ' bg-slate-300'

    if(index !== undefined) {
        onClick = () => {

            let newCols = cols.slice()
            newCols[index] = !cols[index]
            setCols(newCols)

        }
    }

    return (



        <div className='flex w-48 items-center mt-3'>
            <button onClick={onClick}>

                    <div className={'block flex h-12 w-12 items-center justify-center py-4 ml-2 rounded-xl transition-all duration-200 hover:h-14 hover:w-14 hover:mt-2' + bgColor}>
                        {icon}

                    </div>



            </button>

                <h2 className='ml-4 font-bold text-lg'>{text}</h2>

        </div>
)}

