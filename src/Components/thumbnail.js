import React from 'react'
import {Card} from 'react-bootstrap'
const defaultImageURL='https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg'
const defaultTitle   ='Untitled'
const defaultOnClick =()=>alert("defaultOnClick Test")
export default function({title=defaultTitle, imageURL=defaultImageURL, onClick=defaultOnClick})
{
	return <Card style={{width: '18rem'}}>
		<Card.Img variant="top" src={imageURL}/>
		<Card.Footer style={{}}>{title}</Card.Footer>
	</Card>
}