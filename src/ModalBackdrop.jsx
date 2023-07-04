import {useEffect} from 'react'


export default function ModalBackdrop({close, children}) {


    useEffect(() => {

        function closeOnEscPress(e) {
            if(e.key === 'Escape')
                close()
        }

        document.addEventListener('keydown', closeOnEscPress)

        return () => {
            document.removeEventListener('keydown', closeOnEscPress)
        }

    }, [])

    function closeIfNotHighlighting(event) {
        if(window.getSelection().toString() === '')
            close()
    }

    return(
        <div onClick={closeIfNotHighlighting} className='absolute top-0 left-0 h-full w-full bg-white/80 flex justify-center items-center'>
            {children}
        </div>
    )

}