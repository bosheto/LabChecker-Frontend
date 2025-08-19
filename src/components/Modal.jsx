

function Modal({open, children, onClose}){
    if(!open) return null

    return (
        <div>
            {children}
            <button onClick={onClose}>close</button>
        </div>
    )
}

export default Modal