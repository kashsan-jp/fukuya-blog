"use client"

import { useState } from "react";

export default function Contact() {

    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    const [ formData, setFormData ] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async() => {
        e.preventDefault();
        if(!formData.firstName || !formData.email) return;

        try{
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify({...formData}),
            });
        } catch(error) {
            
        }
        
    }

    console.log(formData);

  return (
    <main className='container w-2/4'>
        <form className='py-20' onSubmit={handleSubmit}>
            <legend>Contact Form</legend>
            <div>
                <input 
                    className="my-10" 
                    type='text' 
                    name='firstName' 
                    placeholder='First Name *' 
                    value={formData.firstName}
                    onChange={handleChange}
                />
                    
                <input 
                    className="my-10" 
                    type='text' 
                    name='lastName' 
                    placeholder='Last Name' 
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                <input 
                    className="my-10"
                    type='text' 
                    name='email' 
                    placeholder='Email *' 
                    value={formData.email}
                    onChange={handleChange}
                    />
                <textarea 
                    placeholder='Message' 
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button className='btn btn-primary mt-20'>Submit</button>
        </form>

    </main>
  )
}
