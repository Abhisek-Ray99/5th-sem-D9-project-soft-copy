import React, { useContext, useState } from 'react'


import { BoxContainer, FormContainer, MutedLink, BoldLink } from '../Commonstyle'
import { AccountContext } from '../accountContext'

import valid from '../../../../utils/valid'
import { DataContext } from '../../../../store/GlobalState'
import {postData} from '../../../../utils/fetchData'

const Signupform = () => {

    const { switchToSignin } = useContext(AccountContext)

    const initialState = { name: '', email: '', password: '', cf_password: '' }
    const [userData, setUserData] = useState(initialState)
    const { name, email, password, cf_password } = userData

    const { state, dispatch } = useContext(DataContext)

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setUserData({...userData, [name]: value })
        dispatch({ type: 'NOTIFY', payload: {} })   
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const errMsg = valid(name, email, password, cf_password)
        if (errMsg) {
            return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })
        }
        dispatch({ type: 'NOTIFY', payload: { loading: true } })

        const res = await postData('auth/register', userData)
        if (res.err) {
            return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
        }
        return dispatch({ type: 'NOTIFY', payload: { success: res.msg  } })
    }

    return (
        <BoxContainer>
            <FormContainer className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                autoComplete="given-name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-t-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                                name="name"
                                value={name}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                name="email"
                                value={email}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="confirm-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                name="cf_password"
                                value={cf_password}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create an Account
                        </button>
                    </div>
                    <MutedLink>
                        Already have an Account / <BoldLink onClick={switchToSignin}>Login</BoldLink>
                    </MutedLink>
            </FormContainer>
        </BoxContainer>
    )
}

export default Signupform
