import EdiText from 'react-editext'
import InlineEdit from 'react-ions/lib/InlineEdit'
import React from 'react'
import {useState} from 'react'
import {Card,Collapse} from 'react-bootstrap'
import Thumbnail from './thumbnail'
import Button from 'react-bootstrap/Button'
export default function({thumbnails,editable,title})
{
	const [notCollapsed,setNotCollapsed]=useState(true)
	const categoryFontSize           ='30px'
	console.assert(thumbnails  !==undefined && Object.getPrototypeOf(thumbnails  )===Array .prototype)
	// console.assert(numberOfRows!==undefined && Object.getPrototypeOf(numberOfRows)===Number.prototype)
	return <Card>
		<Card.Header>
			<div style={{'display':'flex','flex-direction':'vertical'}}>
				<Button variant="danger" onClick={()=>setNotCollapsed(!notCollapsed)}>{<i style={{'flex-grow': 0}} className="fas fa-minus-circle"/>}</Button>
				<Button onClick={()=>setNotCollapsed(!notCollapsed)}>{notCollapsed?'▼':'▲'}</Button>
				<div class='mx-auto' style={{'display':'inline-block'}}>{/*Center it*/}
					<EdiText viewProps={{style:{'font-size':categoryFontSize}}}
						// inputProps	={{style:{'font-size':categoryFontSize}}}
							 value={title} type={'text'} onSave={alert}/>
				</div>
			</div>
		</Card.Header>
		<Collapse in={notCollapsed}>
			<Card.Body style={{'overflow-x': 'scroll'}}>
				<div>
					<table>
						<tr>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
							<td>
								<Thumbnail/>
							</td>
						</tr>
					</table>
				</div>
			</Card.Body>
		</Collapse>
	</Card>;
}