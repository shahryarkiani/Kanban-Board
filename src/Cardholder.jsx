import Card, {Endcard} from "./Card.jsx";
import {Droppable} from '@hello-pangea/dnd'


export default function Cardholder({icon, title, tickets}) {


    const cards = tickets.map((ticket, index) => {
        return <Card key={ticket.key} title={ticket.title} desc={ticket.desc} priority={ticket.priority} estimate={ticket.estimate} id={ticket.key} index={index}/>
    })


    return (




        <div className='w-[28vw] mx-4 shrink-0 bg-slate-100 my-8 rounded-md border-t-8 border-teal-800 border-solid shadow-md shadow-black/50'>
            <div className='flex content-center border-b-2 border-black py-2 px-4'>
                <div className='bg-slate-100 shadow-sm shadow-black p-4 text-lg text-black font-bold rounded-md'>
                    <h6>{title}</h6>
                </div>
                <div className='ml-auto shadow-md shadow-white bg-slate-500 p-4 rounded-md'>
                    {icon}
                </div>
            </div>

            <Droppable
            droppableId={title}
            >
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col overflow-y-auto max-h-[80vh] w-[] no-scrollbar rounded-xl'>

                    {cards}
                    {provided.placeholder}
                    {tickets ? <Endcard/> : null}

                    </div>
                )}
            </Droppable>



        </div>
    )

}

