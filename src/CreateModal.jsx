import {AiOutlineCloseCircle} from 'react-icons/ai'
import {ticket} from './Card.jsx'

export default function CreateModal({addCard, close}) {

    function createTicket(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        for(let [key, value] of formData.entries()) {
            console.log(key, value)
        }

        if(formData.get('priority')) {
            let newCard = new ticket(formData.get('title'), formData.get('desc'), formData.get('priority'), null, 'Backlog', crypto.randomUUID())
            addCard(newCard)
            close()
        }

    }

    return (
        <form onSubmit={createTicket} onClick={(e) => e.stopPropagation()} className='appearance-none flex flex-col py-8 px-12 bg-white border-y-8 border-teal-800 rounded-md shadow-md shadow-black'>

            <div className='flex items-center'>

                <h1 className='font-bold text-lg mr-64'>Create Ticket</h1>

                <button onClick={close} className='ml-auto flex items-center justify-center rounded-md h-10 w-10'>
                    <AiOutlineCloseCircle style={{color:'black', fontSize:'28'}}/>
                </button>

            </div>


            <label htmlFor='title' className='block mt-4 text-gray-500 font-bold'>Ticket Name</label>
            <input required='required' name='title' id='title' className='shadow-sm shadow-black/75 appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-700 focus:shadow-none transition-all duration-200 invalid:border-red-700' placeholder='Ticket Name'></input>

            <label htmlFor='desc' className='block mt-4 text-gray-500 font-bold'>Short Description</label>
            <input required='required' name='desc' id='desc' className='shadow-sm shadow-black/75 appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-700 focus:shadow-none transition-all duration-200 invalid:border-red-700' placeholder='Ticket Description'></input>



            <div className='flex mt-4'>

                <label className='block mt-4 mr-2 text-gray-500 font-bold'>Priority:</label>

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




            {/*
            <h2 className='text-gray-500 font-bold mt-4'>Time Estimate</h2>

            <fieldset className=''>
                <label className='appearance-none mr-2 text-gray-500 font-bold'>
                    Hrs.
                </label>
                <input placeholder='Est. Hours' name='hours' id='hours' className='ml-2 w-24 shadow-sm shadow-black/75 appearance-none border-2 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:border-teal-700 focus:shadow-none transition-all duration-200'/>


                <label className='appearance-none ml-2 mr-2 text-gray-500 font-bold'>
                    Min.
                </label>

                <input id='minutes' name='minutes' placeholder='Est. Mins' className='ml-2 w-24 shadow-sm shadow-black/75 appearance-none border-2 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:border-teal-700 focus:shadow-none transition-all duration-200'/>

            </fieldset>
            */}

            <button type='submit' className='mx-auto px-6 py-3 rounded-md font-bold text-lime-600 hover:bg-lime-600 hover:text-white border border-lime-600 mt-4 bg-transparent'>

                Create

            </button>









        </form>
    )


}