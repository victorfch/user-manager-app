import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'
import { useState } from 'react'
import UserForm from './components/UserForm'

function App() {
	const [users, setUsers] = useState([])
	

	const handleSubmit = (newUser) => {
		setUsers([
			...users,
			newUser
		])
	}

	console.log("render app")

	return (
		<Container>
			<Card>
				<UserForm submit={handleSubmit} />
			</Card>
			{users.length > 0 && <Card style={{marginTop: "10px"}}>
				<ul>
					{users.map((user) => <li key={user.email}>{user.name} {user.lastname}: {user.email}</li>)}
				</ul>
			</Card> }
		</Container>
	)
}

export default App
