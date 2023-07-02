

export default function ModalBackdrop({close, children}) {

    return(
        <div onClick={close} className='absolute top-0 left-0 h-full w-full bg-white/80 flex justify-center items-center'>
            {children}
        </div>
    )

}