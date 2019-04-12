import EdiText from 'react-editext'
import InlineEdit from 'react-ions/lib/InlineEdit'
import React from 'react'
import {useState} from 'react'
import {Card, Collapse, Modal} from 'react-bootstrap'
import Thumbnail from './thumbnail'
import Button from 'react-bootstrap/Button'
export default function({thumbnails, editable, title})
{
	const categoryFontSize='30px'
	const [notCollapsed,setNotCollapsed]=useState(true)
	const [askIfDelete ,setAskIfDelete ]=useState(true)
	console.assert(thumbnails!==undefined && Object.getPrototypeOf(thumbnails)===Array.prototype)
	// console.assert(numberOfRows!==undefined && Object.getPrototypeOf(numberOfRows)===Number.prototype)
	const deleteAsker=<div class='mx-auto' >
			Are you sure you want to delete this category?
			<span>
			<Button variant={'danger'}>Yes</Button>
			<Button onClick={()=>setAskIfDelete(false)}>No</Button>
			</span>
	</div>
	const cards=<Card.Body style={{'overflow-x': 'scroll'}}>
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
	return <Card>
		<Card.Header>
			<div style={{'display': 'flex', 'flex-direction': 'vertical'}}>
				<Button variant="danger" onClick={()=>setAskIfDelete(true)}>{<i style={{'flex-grow': 0}} className="fas fa-minus-circle"/>}</Button>
				<Button onClick={()=>setNotCollapsed(!notCollapsed)}>{notCollapsed ? '▼' : '▲'}</Button>
				<div class='mx-auto'>{/*Center it*/}
					<EdiText viewProps={{style: {'font-size': categoryFontSize}}}
						// inputProps	={{style:{'font-size':categoryFontSize}}}
							 value={title} type={'text'} onSave={alert}/>
				</div>
			</div>
		</Card.Header>
		<Collapse in={notCollapsed}>
			{askIfDelete ? deleteAsker : cards}
		</Collapse>
	</Card>
}