import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import NoteState from "./context/noteState";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {
	const pageSize = 15;
	const apiKey = import.meta.env.VITE_API_KEY;
	const [progress, setProgress] = useState(0)

	return (
		<>
			<div>
				<NoteState>
					<Router>
						<Navbar />
						<Routes>
							<Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} category='general' />}></Route>
							<Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} category='business' />}></Route>
							<Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} category='entertainment' />}></Route>
							<Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} category='health' />}></Route>
							<Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} category='science' />}></Route>
							<Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} category='sports' />}></Route>
							<Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} category='technology' />}></Route>
						</Routes>
					</Router>
				</NoteState>
			</div>
		</>
	)
}

