import Thumbnail from './Components/thumbnail'
import Category from './Components/category'
import React, {Component} from 'react'
import Menubar from './Components/menubar';
import UserInfo from './Components/userinfo';

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
			<link
				rel="stylesheet"
				href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
				integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
				crossOrigin="anonymous"
			/>
			<div className="App">
			</div>
		</>
	}
}

export default App
