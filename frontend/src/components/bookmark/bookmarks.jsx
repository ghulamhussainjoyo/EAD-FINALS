import React, { useEffect } from 'react';
import { useState } from 'react';
import apple from '../../images/apple.png';

import Modal from '../modal/modal';
import Bookis from './Bookis';

import { useDispatch, useSelector } from 'react-redux';
import { getAllBookmark } from '../../redux/slice/booki';

function Bookmark() {
	const dispatch = useDispatch();
	const bookmark = useSelector((state) => state.allBookmark);


    console.log(bookmark)
    // 
	let subtitle;
	const [ modalIsOpen, setIsOpen ] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	useEffect(
		() => {
			dispatch(getAllBookmark());
		},
		[ dispatch ]
	);

	return (
		<div>
			<div className="modla" id="booki-modal" />
			<Modal
				openModal={openModal}
				modalIsOpen={modalIsOpen}
				afterOpenModal={afterOpenModal}
				closeModal={closeModal}
				subtitle={subtitle}
				setIsOpen={setIsOpen}
			/>
			<div className="bookmark">
				<div className="booki-header">
					<h4>Favourites</h4>
					<div className="less-container">
						<label for="less">ShowLess</label>
						<input type="checkbox" id="less" value="less" />
					</div>
				</div>

				<div className="booki-fav">
					<div className="bookmarks">
						
                        
                        {
                            bookmark.bookmarks && bookmark.bookmarks.map((data)=> <Bookis data={data}  key={data._id}/>)
                        }
                       
						
					</div>

					<button className="booki-add" onClick={openModal}>
						+
					</button>
				</div>

				<div className="booki-visited" />
			</div>
		</div>
	);
}

export default Bookmark;
