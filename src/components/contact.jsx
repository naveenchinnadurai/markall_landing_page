import React,{useState} from 'react'
import { CiPhone as Phone , CiLocationOn  as Location ,CiGlobe as Globe} from "react-icons/ci";
function Contact() {
    const contactList = [
        {
            id:1,
            title: 'Call us',
            img: <Phone/>,
            txt: '+91 93545 66860',
            class:"border-b border-gray-300 w-fit"
        },
        {
            id:2,
            title: 'Location',
            img: <Location/>,
            txt: 'Ghaziabad, Uttar Pradesh',
            class:""
        },
        {
            id:3,
            title: 'Mail us',
            img: <Globe/>,
            txt: 'info@markall.in',
            class:""
        },
    ]
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phnNo, setPhnNo] = useState('');
    const [msg, setMsg] = useState('');

    const [formFilledDetails, setFormFilledDetails] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phnNo || !msg) {
            alert('Please fill in all fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phnNo)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        const enteredData = {
            Name: name,
            EmailId: email,
            PhoneNo: phnNo,
            Message: msg
        };

        setFormFilledDetails(enteredData);

        console.log(formFilledDetails);
        alert(`Name: ${name}\nEmail: ${email}\nPhone No: ${phnNo}\nMessage: ${msg}`);

        setName('');
        setEmail('');
        setPhnNo('');
        setMsg('');
    };
    return (
        <div className='md:h-[600px] my-28 px-3 sm:px-10 py-10  lg:px-20 flex flex-wrap bg-[#e6f0fd] justify-between'>
            <div className="flex flex-wrap md:flex-col justify-center md:w-1/3 lg:w-5/12">
                {
                    contactList.map((e) => {
                        return (
                            <div key={e.id} className="w-full sm:w-1/2 md:w-fit flex flex-col mt-8 lg:mt-0 justify-evenly items-center md:items-start lg:p-6 " id={e.id}>
                                <div className="flex items-center justify-center md:gap-1">
                                    <span className='text-blue-600 font-bold text-3xl md:text-3xl'>{e.img}</span>
                                    <h1 className='text-xl md:text-2xl font-medium text-[#4F4F4F]'>{e.title}</h1>
                                </div>
                                <p className={`text-lg md:text-xl text-gray-500 text-center md:text-start ${e.class}`}>{e.txt}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-fit mt-10 md:-mt-16 md:h-[130%] bg-white w-full md:w-2/3 lg:w-7/12 px-6 sm:px-12 py-6 shadow-xl">
                <h1 className='text-5xl my-2 font-bold'>Contact Now</h1>
                <p className='leading-[30px] text-xl font-medium text-justify text-[#828282] mt-4'>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>
                <form className='flex flex-col p-2 my-1'>
                    <input type="text" value={name} placeholder='Name *' onChange={(e) => setName(e.target.value)} />
                    <input type="email" value={email} placeholder='Email *' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={phnNo} placeholder='Phone *' onChange={(e) => setPhnNo(e.target.value)} />
                    <input type="text" value={msg} placeholder='Message' onChange={(e) => setMsg(e.target.value)} />
                    <span role='button' className='bg-[#3E62D8] w-fit px-5 py-2 rounded-lg sm:px-10 sm:py-4 text-white my-12 text-base cursor-pointer' onClick={handleSubmit}>Submit Form</span>
                </form>
            </div>
        </div>
    )
}

export default Contact