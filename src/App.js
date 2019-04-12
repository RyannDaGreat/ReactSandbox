import Thumbnail from './Components/thumbnail'
import Category from './Components/category'
import React, {Component} from 'react'

class App extends Component
{
	render()
	{
		return <>
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			/>
			<div className="App">
				<Category name="Category Name" style={{width:'100%'}}/>
			</div>
		</>
	}
}

export default App
