import React, { useState } from 'react'
import singupbg from '../assets/img/register_bg_2.png'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { BASE_URL } from '../config'
import { Link } from 'react-router-dom'

function Signup() {

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        user_type: 'student',
        gender: ''
    })
    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = async event => {
        event.preventDefault()
        setLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/authentication/user-signup/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message)
            }

            setLoading(false)
            toast.success(message)
            navigate('/login')
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }
    return (
        <>
            <main>
                <section className="relative w-full h-full py-30 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                        style={{
                            backgroundImage:
                                "url(" + singupbg + ")",
                        }}
                    ></div>
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <div className="text-blueGray-400 text-center mb-3 font-bold">
                                            <h3 className='text-headingColor text-[22px] leading-9 font-bold m-5'>
                                                Sign <span className='text-primaryColor'>Up</span>
                                            </h3>
                                        </div>
                                        <form onSubmit={submitHandler}>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    User Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name='username'
                                                    value={formData.username}
                                                    onChange={handleInputChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="User Name"
                                                    required
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name='first_name'
                                                    value={formData.first_name}
                                                    onChange={handleInputChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name='last_name'
                                                    value={formData.last_name}
                                                    onChange={handleInputChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name='email'
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name='password'
                                                    value={formData.password}
                                                    onChange={handleInputChange}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>
                                            <div className='mb-5 flex items-center justify-between bg-blueGray-200'>
                                                <label className='text-blueGray-600  font-bold text-[16px] leading-7'>
                                                    Are you a :
                                                    <select name="role" id="role" className='text-blueGray-600 text-[15px] font-bold leading-7 px-4 py-3
                                                        bg-blueGray-200 focus:outline-none'
                                                        value={formData.role}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option key={1} value="patient">Student</option>
                                                        <option key={2} value="doctor">Teacher</option>
                                                    </select>
                                                </label>
                                                <label className='text-blueGray-600 font-bold text-[16px] leading-7'>
                                                    Gender :
                                                    <select name="gender" id="gender" className='text-blueGray-600  font-bold  text-[15px] leading-7 px-4 py-3
                                                        bg-blueGray-200 focus:outline-none'
                                                        value={formData.gender}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option key={1} value="" disabled selected>Select</option>
                                                        <option key={2} value="male">Male</option>
                                                        <option key={3} value="female">Female</option>
                                                        <option key={4} value="other">Other</option>
                                                    </select>
                                                </label>
                                            </div>


                                            <div className="text-center mt-6">
                                                <button
                                                    disabled={loading && true}
                                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                    type='submit'
                                                >
                                                    {loading ? <HashLoader size={35} color='#ffffff' /> : 'Create Account'}
                                                </button>
                                            </div>
                                            <p className="mt-5 text-center text-textColor">
                                                Already hvae an account? <Link to='/login' className='text-primaryColor
                                                font-medium ml-1'>Login</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Signup