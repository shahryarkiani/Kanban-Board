

export default function ModalBackdrop({close, children}) {

    return(
        <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex justify-center items-center'>
            {children}
        </div>
    )

}