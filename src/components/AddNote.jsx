import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";

const AddNote = () => {
	const context = useContext(noteContext);
	const { addNote } = context;

	const [note, setNote] = useState({ title: "", description: "", tag: "default" });
	const [image, setImage] = useState("")

	const clickHandler = () => {
		addNote(note.title, note.description, note.tag, note.image);
	};

	const changeHandler = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	const covertToBase64 = (e) => {
		// console.log(e)
		var reader = new FileReader()
		reader.readAsDataURL(e.target.files[0])
		reader.onload = () => {
			// console.log(reader.result)
			setImage(reader.result)
			console.log(image)
		}
		reader.onerror = error => {
			console.log("Error: ", error)
		}
	}

	return (
		<>
			<div className="container">
				<h1 className="my-4">Add a new Blog</h1>
				<form className="my-4">
					<div className="mb-3">
						<label htmlFor="title" className="form-label">Title</label>
						<input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter the title..."
							onChange={changeHandler} />
					</div>
					<div className="mb-3">
						<label htmlFor="formFile" className="form-label">Upload an image</label>
						<input className="form-control" type="file" id="formFile" name="formFile" onChange={covertToBase64} />
						<input type="hidden" name="image" value={(image == null || image == "") ? "" : image} />
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">Description</label>
						<textarea type="text" className="form-control" rows="3" placeholder="Enter the description..." id="description" onChange={changeHandler} name="description" />
					</div>
					<div className="mb-3">
						<label htmlFor="tag" className="form-label">Tag</label>
						<input type="text" className="form-control" id="tag" name="tag" aria-describedby="emailHelp" placeholder="Enter the tag..."
							onChange={changeHandler} />
					</div>
					<button type="button" className="btn btn-primary" onClick={clickHandler}>Add Note</button>
				</form>
			</div>
		</>
	);
};

export default AddNote;