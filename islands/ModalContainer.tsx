import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Modal from "../islands/Modal.tsx"
import {useState} from "preact/hooks"

export default function ModalContainer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)

    return (
	<div>
	    <Modal visible={showModal} onClose={handleOnClose} />

	    <button
	    onClick={()=>setShowModal(true) }
		className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
	    >Show Modal</button>
	</div>
    );
}
