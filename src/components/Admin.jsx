import Modal from "./Modal"
import { useState } from "react"

function Admin () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Add Host</button>
            <Modal open= {isOpen} onClose={() => setIsOpen(false)}>
                Add host modal         
            </Modal>
        </div>
    )
}

export default Admin 