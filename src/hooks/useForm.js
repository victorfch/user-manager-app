import { useState } from 'react'

const useForm = (initial) => {
	const [form, setForm] = useState(initial)

	const handleChange = ({ target }) => {
		setForm(oldForm => {
			return {
				...oldForm,
				[target.name]: target.value
			}
		})
	}

	return [form, handleChange]
}

export default useForm