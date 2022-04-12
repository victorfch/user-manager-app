import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
	const [form, handleChange] = useForm({ 
		name: '',
		lastname: '',
		email: '' 
	})
	console.log(form)

	return (
		<Container>
			<Card>
				<form>
					<Input
						label="Nombre"
						type="text"
						name="name"
						onChange={handleChange}
						value={form.name}
					/>
					<Input
						label="Apellido"
						type="text"
						name="lastname"
						onChange={handleChange}
						value={form.lastname}
					/>
					<Input
						label="Email"
						type="email"
						name="email"
						onChange={handleChange}
						value={form.email}
					/>
					<Button text="Enviar" />
				</form>
			</Card>
		</Container>
	)
}

export default App
