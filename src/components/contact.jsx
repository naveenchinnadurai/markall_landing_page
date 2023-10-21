import React from 'react'
import '../styles/contact.css'
import call from '../assets/contactImg/callImg.png'
import location from '../assets/contactImg/locationImg.png'
import email from '../assets/contactImg/emailImg.png'

function Contact() {
    const contactList = [
        {
            title: 'Call us',
            img: call,
            txt: '+91 93545 66860'
        },
        {
            title: 'Location',
            img: location,
            txt: 'Ghaziabad, Uttar Pradesh'
        },
        {
            title: 'Mail us',
            img: email,
            txt: 'info@markall.in'
        },
    ]
    const formFilledDetails = []
    const getData = () => {
        const name = document.getElementById('name-input').value
        const email = document.getElementById('email-input').value
        const phnNo = document.getElementById('phone-input').value
        const msg = document.getElementById('msg-input').value
        const enterDetails={
            Name:name,
            EmailId:email,
            PhoneNo:phnNo,
            Message:msg
        }
        alert("Name: "+name+"\nEmai: "+email+"\nPhone No: "+phnNo+"\nMessage: "+msg)
    }
    return (
        <div className='Contact-div'>
            <div className="contact-txt">
                {
                    contactList.map((e) => {
                        return (
                            <div className="contact-text">
                                <div className="contact-icons">
                                    <img src={e.img} alt={e.title} />
                                    <h1>{e.title}</h1>
                                </div>
                                <p>{e.txt}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="contact-inputs">
                <h1>Contact Now</h1>
                <p>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>
                <form>
                    <input type="text" placeholder='Name *' id='name-input' />
                    <input type="email" placeholder='Email *' id='email-input' />
                    <input type="text" placeholder='Phone *' id='phone-input' />
                    <input type="text" placeholder='Message' id='msg-input' />
                    <span role='button' className='submit-btn' onClick={getData}>Submit Form</span>
                </form>
            </div>
        </div>
    )
}

export default Contact