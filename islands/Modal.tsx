interface Props {
    visible: bool
}

export default function Modal({visible, onClose}) {
    const handleOnClose = (e) => {
	if (e.target.id === "container")
	    onClose();
    }

    if (!visible) return <div></div>;
    return <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-70 backtrop-blur-sm flex justify-center items-center">
	<div className="bg-white p-2 rounded">My Modal</div>
    </div>;
}
