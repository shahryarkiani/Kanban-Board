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
import useLocalStorage from './useLocalStorage.jsx'

function App({page}) {

    const [backlogCards, setBacklogCards] = useLocalStorage('Backlog', [new ticket('Getting Started', 'Use the + button to the left to create your own ticket. Drag and Drop tickets to update their status or to sort them in the list. Double click the red delete button to delete a ticket', 'High', null, 'Backlog', crypto.randomUUID())])
    const [todoCards, setTodoCards] = useLocalStorage('To-Do', [])
    const [inProgressCards, setInProgressCards] = useLocalStorage('In Progress', [])
    const [doneCards, setDoneCards] = useLocalStorage('Done', [])

    function addCard(card) {
        const newCards = backlogCards.slice()
        newCards.unshift(card)
        setBacklogCards(newCards)
    }

    function deleteCard(cards, setCards) {

        return function(index) {

            let newCards = cards.slice()
            newCards.splice(index, 1)
            setCards(newCards)

        }

    }

    const [createModalOpen, setCreateModalStatus] = useState(false)

    let justify = (page === 'home') ? ' justify-normal' : ' justify-center'

  return (
    <>
        <Sidebar openCreateModal={() => setCreateModalStatus(true)} />
        <div className={'flex ml-16 h-screen text-white items-start overflow-x-auto' + justify}>
            <DragDropContext onDragEnd={handleDropEnd}>

                { (page === 'home' || page === 'backlog') ? <Cardholder removeFunction={deleteCard(backlogCards, setBacklogCards)} title={'Backlog'} icon={<BsInboxes style={{color:'white', fontSize:'28'}} />} tickets={backlogCards} /> : null}

                { (page === 'home' || page === 'todo') ? <Cardholder removeFunction={deleteCard(todoCards, setTodoCards)} title={'To-Do'} icon={<FaArrowsToDot style={{color:'white', fontSize:'28'}}/>} tickets={todoCards} /> : null}

                { (page === 'home' || page === 'inprogress') ? <Cardholder removeFunction={deleteCard(inProgressCards, setInProgressCards)} title={'In Progress'} icon={<TbProgressBolt style={{color:'white', fontSize:'28'}}/>} tickets={inProgressCards} /> : null}

                { (page === 'home' || page === 'done') ? <Cardholder removeFunction={deleteCard(doneCards, setDoneCards)} title={'Done'} icon={<AiFillCheckCircle style={{color:'white', fontSize:'28'}}/>} tickets={doneCards} /> : null}


            </DragDropContext>


        </div>

        {
            createModalOpen ? <ModalBackdrop close={() => setCreateModalStatus(false)}> <CreateModal addCard={addCard} close={() => setCreateModalStatus(false)} /> </ModalBackdrop> : null
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
