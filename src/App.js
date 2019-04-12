// import React, {Component} from 'react'
// import logo from './logo.svg'
// import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu"
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'
// import 'ryan/style.css'
// import {SketchPicker} from 'react-color'
// import {SketchField, Tools} from 'react-sketch'
// function handleClick(e, data)
// {
// 	console.log(data.foo)
// }
// class App extends Component
// {
//
// 	render()
// 	{
// 		const options      =[
// 			{value: 'one', label: 'One'},
// 			{value: 'two', label: 'threeyt'},
// 			{
// 				type: 'group', name: 'group1', items: [
// 					{value: 'three', label: 'Three'},
// 					{value: 'four', label: 'Four'}
// 				]
// 			},
// 			{
// 				type: 'group', name: 'group2', items: [
// 					{value: 'five', label: 'Five'},
// 					{value: 'six', label: 'Six'}
// 				]
// 			}
// 		]
// 		const defaultOption=options[0]
// 		return (
// 			<div>
// 				<div className="App">
// 					<ContextMenuTrigger id="some_unique_identifier">
// 						<header className="App-header">
// 							<img src={logo} className="App-logo" alt="logo"/>
// 							<p>
// 								Edit <code>src/App.js</code> and save to reload.
// 							</p>
// 							<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option"/>
//
// 							<a
// 								className="App-link"
// 								href="https://reactjs.org"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 							>
// 								Learn React
// 							</a>
// 						</header>
//
// 					</ContextMenuTrigger>
//
// 				</div>
// 				<ContextMenu id="some_unique_identifier">
// 					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
// 						ContextMenu Item 1
// 					</MenuItem>
// 					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
// 						ContextMenu Item 2
// 					</MenuItem>
// 					<MenuItem divider/>
// 					<MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
// 						ContextMenu Item 3
// 					</MenuItem>
// 				</ContextMenu>
// 				<SketchPicker/>
// 				<SketchField width='1024px'
// 							 height='768px'
// 							 tool={Tools.Rectangle}
// 							 lineColor='black'
// 							 lineWidth={3}/>
// 			</div>
// 		)
// 	}
// }
//
// export default App
// import './App.css'

import Thumbnail from './Components/thumbnail'
import React, {Component} from 'react'

class App extends Component
{
	render()
	{
		return (
			<>
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossOrigin="anonymous"
				/>
				<div className="App">
					<Thumbnail/>
				</div>
			</>
		)
	}
}

export default App
