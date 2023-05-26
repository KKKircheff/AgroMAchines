import FormInputField from "../form-input-field/form-input-field.component.";
import FormTextArea from "../form-text-area-field/form-text-area.component";
import Button from "../button/button.component"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './contact-form.style.scss'

const contactInfo = {
  name: '',
  company: '',
  phoneNumber: '',
  email: '',
  message: ''
}

interface FieldsRegex {
  [key: string]: RegExp;
}

const fieldsRegex: FieldsRegex = {
  name: /^[A-Za-z\s]{0,35}$/,
  company: /^[A-Za-z\s\d-]{0,35}$/,
  email: /^[A-Za-z0-9._%+-@]{0,15}$/,
  phoneNumber:/^[0-9+\-()\s]{0,15}$/,
  message: /^.{0,400}$/,
  fullPhoneNumber: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
  fullEmailName: /^(?!.{41})[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-zA-Z]{2,6}$/gm
}

export default function ContatForm() {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(contactInfo);

  const clearFormFields = () => {
    console.log('clearfields')
  }


  const validateField = (regex: RegExp, value: string) => {
    return regex.test(value);
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    const isValidFieldValue = validateField(fieldsRegex[name], value);
    console.log(isValidFieldValue)
    if (!isValidFieldValue) {
       return 
      }

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, message, phoneNumber } = formValues;
    if (!name || !email || !phoneNumber || !message) {
      alert("Моля попълнете всички задължителни полете!");
      return;
    }

    console.log('Form:-----------', formValues);
  }

  return (
    <div className="contact-form-container">
      <h2>Контакт с нас</h2>
      <p>ако имате въпрос относно някой от нашите продукти или имате нужда от съдействие в Нидерландия за закупуване на земеделска техника</p>
      <form onSubmit={handleSubmit}>
        <FormInputField
          label='Имена'
          type='text'
          name='name'
          onChange={handleChange}
          value={formValues.name}
        />

        <FormInputField
          label='Компния'
          type='text'
          name='company'
          onChange={handleChange}
          value={formValues.company}
        />

        <FormInputField
          label='Телефон за контакт'
          type='text'
          name='phoneNumber'
          onChange={handleChange}
          value={formValues.phoneNumber}
        />

        <FormInputField
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          value={formValues.email}
        />

        <FormTextArea
          label='Запитване'
          type='text'
          rows='8'
          cols='100'
          name='message'
          onChange={handleChange}
          value={formValues.message}
        />

        <div className="buttons-container">
          <Button type='submit' buttonType={'default'}>изпрати</Button>
        </div>
      </form>
    </div>
  )
}