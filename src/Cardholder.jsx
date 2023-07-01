import Card, {Endcard} from "./Card.jsx";


export default function Cardholder({icon, title, tickets}) {


    const cards = tickets.map((ticket) => {
        return <Card key={ticket.key} title={ticket.title} desc={ticket.desc} priority={ticket.priority} estimate={ticket.estimate}/>
    })


    return (
        <div className='basis-[28%] grow-0 bg-slate-200 my-8 rounded-md border-t-8 border-teal-800 border-solid shadow-md shadow-black/50 pt-8'>
            <div className='flex content-center border-b-2 border-black pb-1 px-4'>
                <div className='bg-white shadow-sm shadow-black p-4 text-lg text-black font-bold rounded-md'>
                    <h6>{title}</h6>
                </div>
                <div className='ml-auto shadow-md shadow-white bg-slate-500 p-4 rounded-md'>
                    {icon}
                </div>
            </div>
            <div className='flex flex-col overflow-y-auto max-h-[80vh] w-[] no-scrollbar rounded-xl'>

                {cards}

                {tickets ? <Endcard/> : null}
            </div>

        </div>
    )

}

