import { isAuthenticated } from '@/stores/Auth'
import { redirect } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function Admin() {
    useLayoutEffect(() => {
        const isAuth = isAuthenticated
        if (!isAuth) {
            redirect('/')
        }
    }, [])

    return (
        <>
            {/*<h2>Bin Interface Config</h2>*/}
            <form className="w-full max-w-sm">
                <div className="md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="text-gray-500 font-bold">
                            Username
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            type="text"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    <div className="md:w-1/3">
                        <label className="text-gray-500 font-bold">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            type="password"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Sign In
                </button>
            </form>
        </>
    )
}
