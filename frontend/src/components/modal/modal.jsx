import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { createBookmark } from '../../redux/slice/booki';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

// Modal.setAppElement('#booki-modal');

function Modo({ openModal, modalIsOpen, afterOpenModal, closeModal, subtitle, setIsOpen}) {
	const [ link, setLink ] = useState('');
	const dispatch = useDispatch();
	const {success} = useSelector((state) => state.createBook);

    console.log(success)

	//
	function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData();
		formData.append('link', link);
		if (link) {
			dispatch(createBookmark(formData));
		}
	}
 

    useEffect(()=>{

        if(success)
        {
            closeModal()
        }
    },[success,closeModal])


	return (
		<div>
			{/* <button onClick={openModal}>Open Modal</button> */}
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Bookmark"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
				{/* <button onClick={closeModal}>close</button> */}
				{/* <div>I am a modal</div> */}
				<form onSubmit={handleSubmit}>
					<input type={'text'} value={link} onChange={(e) => setLink(e.target.value)} />
					<input type={'submit'} value="save" />
				</form>
			</Modal>
		</div>
	);
}

export default Modo;
