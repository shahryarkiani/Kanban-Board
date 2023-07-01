import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function CreateModal({submit, close}) {

    return (
        <div className='flex flex-col p-32 bg-slate-300 border-y-8 border-teal-800 rounded-md'>
            <button onClick={close} className='ml-auto flex items-center justify-center rounded-md h-12 w-12 bg-red-600'>
                <AiOutlineCloseCircle style={{color:'white', fontSize:'32'}}/>
            </button>
            <h1>Create Ticket</h1>
            <label>Title:</label>
            <input></input>

            <label>Short Description:</label>
            <input></input>

            <label>Priority:</label>

            <div className='flex'>


                <div className='flex'>
                    <input className='hidden peer' type='radio' name='priority' id='first' value='High'/>
                    <label htmlFor='first' className='hover:cursor-pointer text-white mx-1 p-2 py-1 mt-2 rounded-md bg-lime-500 peer-checked:border-black peer-checked:border-t-2 peer-checked:border-solid'>High</label>
                </div>

                <div className='flex'>
                    <input className='hidden peer' type='radio' name='priority' id='second' value='Medium'/>
                    <label htmlFor='second' className='hover:cursor-pointer text-white mx-1 p-2 py-1 mt-2 rounded-md bg-yellow-400 peer-checked:border-black peer-checked:border-t-2 peer-checked:border-solid'>Medium</label>

                </div>

                <div className='flex'>
                    <input className='hidden peer' type='radio' name='priority' id='third' value='Low'/>
                    <label htmlFor='third' className='hover:cursor-pointer text-white mx-1 p-2 py-1 mt-2 rounded-md bg-orange-500 peer-checked:border-black peer-checked:border-t-2 peer-checked:border-solid'>Low</label>
                </div>

            </div>



        </div>
    )


}