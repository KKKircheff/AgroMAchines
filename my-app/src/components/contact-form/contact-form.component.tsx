import FormInputField from "../form-input-field/form-input-field.component.";
import Button from "../button/button.component"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './contact-form.style.scss'


export default function ContatForm() {

  const navigate = useNavigate();


  const clearFormFields = () => {
    console.log('clearfields')
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (!password || !email) {
    //     alert("Missing credentials!");
    //     return;
    // }
  }

  return (
    <div className="contact-form-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputField
          required
          label='Имена'
          type='text'
          name='name'
          onChange={handleChange}
          value={''}
        />

        <FormInputField
          label='Компния'
          type='text'
          name='company'
          onChange={handleChange}
          value={''}
        />

        <FormInputField
          required
          label='Телефон за контакт'
          type='number'
          max='999999999999'
          name='phoneNumber'
          onChange={handleChange}
          value={''}
        />

        <FormInputField
          required
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          value={''}
        />

        <FormInputField
          label='Запитване'
          type='text'
          required
          name='textField'
          onChange={handleChange}
          value={''}
        />

        <div className="buttons-container">
          <Button type='submit' buttonType={'default'}>SIGN IN</Button>
        </div>
      </form>
    </div>
  )
}