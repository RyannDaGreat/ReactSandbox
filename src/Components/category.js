import React from 'react'
import {Card} from 'react-bootstrap'
const defaultImageURL='https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg'
const defaultTitle   ='Untitled'
const defaultOnClick =()=>alert("defaultOnClick Test")
export default function({generalBaseIds})
{
	console.assert(generalBaseIds!==undefined && Object.getPrototypeOf(generalBaseIds)===Array.prototype)
	return <Card style={{width: '18rem',cursor:'pointer'}} onClick={onClick}>
		<Card.Img variant="top" src={imageURL}/>
		<Card.Footer style={{'text-align':'center'}}>{title}</Card.Footer>
	</Card>
}