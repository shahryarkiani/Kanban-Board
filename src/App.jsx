import Sidebar from './Sidebar.jsx'
import Cardholder from './Cardholder.jsx'
import {BsInboxes} from 'react-icons/bs'
import {FaArrowsToDot} from 'react-icons/fa6'
import {TbProgressBolt} from 'react-icons/tb'
import {useState} from 'react'
import {ticket} from './Card.jsx'
import ModalBackdrop from './ModalBackdrop.jsx'
import CreateModal from './CreateModal.jsx'

function App() {

    const [backlogCards, setBacklogCards] = useState([new ticket('Drag and Drop', 'Implement DnD Functionality', 'High', '3H', 'Backlog', crypto.randomUUID())]);
    const [todoCards, setTodoCards] = useState([]);
    const [inProgressCards, setInProgressCards] = useState([]);

    function addCard(card) {
        const newCards = backlogCards.slice()
        newCards.push(card)
        setBacklogCards(newCards)
    }

    const [createModalOpen, setCreateModalStatus] = useState(false)


  return (
    <>
        <Sidebar openCreateModal={() => setCreateModalStatus(true)} />
        <div className='flex ml-12 justify-evenly text-white items-start'>
            <Cardholder title={'Backlog'} icon={<BsInboxes style={{color:'white', fontSize:'28'}} />} tickets={backlogCards} />

            <Cardholder title={'To-Do'} icon={<FaArrowsToDot style={{color:'white', fontSize:'28'}}/>} tickets={todoCards} />

            <Cardholder title={'In Progress'} icon={<TbProgressBolt style={{color:'white', fontSize:'28'}}/>} tickets={inProgressCards} />

        </div>

        {
            createModalOpen ? <ModalBackdrop close={() => setCreateModalStatus(false)}> <CreateModal close={() => setCreateModalStatus(false)} /> </ModalBackdrop> : null
        }


    </>
  )
}

export default App
