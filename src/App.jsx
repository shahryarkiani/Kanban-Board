import Sidebar from './Sidebar.jsx'
import Cardholder from './Cardholder.jsx'
import {BsInboxes} from 'react-icons/bs'
import {FaArrowsToDot} from 'react-icons/fa6'
import {TbProgressBolt} from 'react-icons/tb'
import {AiFillCheckCircle} from 'react-icons/ai'
import {useState} from 'react'
import {ticket} from './Card.jsx'
import ModalBackdrop from './ModalBackdrop.jsx'
import CreateModal from './CreateModal.jsx'
import {DragDropContext} from '@hello-pangea/dnd'

function App() {

    const [backlogCards, setBacklogCards] = useState([new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'Backlog', crypto.randomUUID())])
    const [todoCards, setTodoCards] = useState([new ticket('Test1', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()), new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()), new ticket('Test2', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()), new ticket('Test3', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()), new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()),new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()), new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()),new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()), new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()),new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID()), new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'To-Do', crypto.randomUUID())])
    const [inProgressCards, setInProgressCards] = useState([])
    const [doneCards, setDoneCards] = useState([])

    function addCard(card) {
        const newCards = backlogCards.slice()
        newCards.unshift(card)
        setBacklogCards(newCards)
    }

    const [createModalOpen, setCreateModalStatus] = useState(false)


  return (
    <>
        <Sidebar openCreateModal={() => setCreateModalStatus(true)} />
        <div className='flex ml-16 h-screen text-white items-start overflow-x-auto'>
            <DragDropContext onDragEnd={handleDropEnd}>

                <Cardholder title={'Backlog'} icon={<BsInboxes style={{color:'white', fontSize:'28'}} />} tickets={backlogCards} />

                <Cardholder title={'To-Do'} icon={<FaArrowsToDot style={{color:'white', fontSize:'28'}}/>} tickets={todoCards} />

                <Cardholder title={'In Progress'} icon={<TbProgressBolt style={{color:'white', fontSize:'28'}}/>} tickets={inProgressCards} />

                <Cardholder title={'Done'} icon={<AiFillCheckCircle style={{color:'white', fontSize:'28'}}/>} tickets={doneCards} />


            </DragDropContext>


        </div>

        {
            createModalOpen ? <ModalBackdrop close={() => setCreateModalStatus(false)}> <CreateModal close={() => setCreateModalStatus(false)} /> </ModalBackdrop> : null
        }


    </>
  )


    function handleDropEnd(result) {
        console.log(JSON.stringify(result))

        const source = result.source.droppableId

        const originIndex = result.source.index
        let originCards = null
        let setOriginCards = null

        if(source === 'Backlog'){
            originCards = backlogCards
            setOriginCards = setBacklogCards
        }
        else if(source === 'To-Do'){
            originCards = todoCards
            setOriginCards = setTodoCards
        }
        else if(source === 'In Progress'){
            originCards = inProgressCards
            setOriginCards = setInProgressCards
        }
        else if(source === 'Done'){
            originCards = doneCards
            setOriginCards = setDoneCards
        }


        const dest = result.destination.droppableId

        let destCards = null
        let setDestCards = null
        const destIndex = result.destination.index

        if(dest === 'Backlog'){
            destCards = backlogCards
            setDestCards = setBacklogCards
        }
        else if(dest === 'To-Do'){
            destCards = todoCards
            setDestCards = setTodoCards
        }
        else if(dest === 'In Progress'){
            destCards = inProgressCards
            setDestCards = setInProgressCards
        }
        else if(dest === 'Done'){
            destCards = doneCards
            setDestCards = setDoneCards
        }


        let newOriginCards = originCards.slice()

        let temp = newOriginCards.splice(originIndex, 1)[0]


        if(originCards === destCards) {
            newOriginCards.splice(destIndex, 0, temp)
            setOriginCards(newOriginCards)
            return
        }

        let newDestCards = destCards.slice()

        newDestCards.splice(destIndex, 0, temp)

        setOriginCards(newOriginCards)

        setDestCards(newDestCards)


    }

}

export default App
