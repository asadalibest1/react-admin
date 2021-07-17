import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Redirect } from "react-router-dom"
import Image from "../../img/login.jpg"

export default function Login() {
    const { currentUser } = useAuth();

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            // history.push("/dashboard")
            history.push("/dashboard")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }


    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="bg-gradient-primary d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="container">

                {/* <!-- Outer Row --> */}

                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                {/* <!-- Nested Row within Card Body --> */}

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{ backgroundImage: `url(${Image})` }}>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <div class="form-group text-center">
                                                {
                                                    error && <small variant="danger">{error}</small>
                                                }
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        ref={emailRef}
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        ref={passwordRef}
                                                        value="123456"
                                                        id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <button type="submit" disabled={loading} className="btn btn-primary btn-user btn-block text-white">
                                                    Login
                                                </button>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="/forgot-password">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="/register">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
