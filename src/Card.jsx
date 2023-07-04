import {Draggable} from '@hello-pangea/dnd'


export default function Card({title, desc, priority, estimate, id, index}) {

    let priorityColor = getPriorityColor(priority)

    let borderColor = ' border-' + priorityColor

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={'flex flex-col mt-4 mb-4 py-4 px-1 text-black shadow-lg shadow-black/50 bg-slate-200 rounded-md mx-4 border-t-4 ' + borderColor}>
                <div className='flex'>

                    <div className='font-bold text-lg py-1 ml-1'>{title}</div>

                    <div className={'ml-auto text-white p-2 py-1 rounded-md bg-' + priorityColor}>{priority}</div>
                </div>
                <div className='ml-1 mt-1'>{desc}</div>
            </div>
        )}
        </Draggable>

    )
}


export function getPriorityColor(priority) {
    if(priority === "High")
        return 'lime-500 '
    else if(priority === "Medium")
        return 'yellow-400 '
    else if(priority === "Low")
        return 'orange-500 '
    else
        return 'white '
}

export function Endcard() {
    return (
        <hr className='rounded-full mx-2 mt-3 border border-2 border-gray-400 my-auto mb-3 mx-4'/>
    )
}

export function ticket(title, desc, priority, estimate, status, key) {
    this.title = title
    this.desc = desc
    this.priority = priority
    this.estimate = estimate
    this.status = status
    this.key = key
}
