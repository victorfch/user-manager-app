import useForm from "../hooks/useForm"
import Input from "./Input"
import Button from "./Button"

function UserForm({submit}) {
    const [form, handleChange, reset] = useForm({ 
		name: '',
		lastname: '',
		email: '' 
	})

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(form)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
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

    )
}

export default UserForm