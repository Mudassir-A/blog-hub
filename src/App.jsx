import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default class App extends Component {
  pageSize = 15;
  apiKey = import.meta.env.VITE_API_KEY;

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<News apiKey={this.apiKey} key='general' pageSize={this.pageSize} category='general' />}></Route>
              <Route path='/business' element={<News apiKey={this.apiKey} key='business' pageSize={this.pageSize} category='business' />}></Route>
              <Route path='/entertainment' element={<News apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} category='entertainment' />}></Route>
              <Route path='/health' element={<News apiKey={this.apiKey} key='health' pageSize={this.pageSize} category='health' />}></Route>
              <Route path='/science' element={<News apiKey={this.apiKey} key='science' pageSize={this.pageSize} category='science' />}></Route>
              <Route path='/sports' element={<News apiKey={this.apiKey} key='sports' pageSize={this.pageSize} category='sports' />}></Route>
              <Route path='/technology' element={<News apiKey={this.apiKey} key='technology' pageSize={this.pageSize} category='technology' />}></Route>
            </Routes>
          </Router>
        </div>
      </>
      
    )
  }
}
