import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory, Redirect } from "react-router-dom"
import Image from "../../img/register.jpg"



export default function Register() {
    const { currentUser } = useAuth();

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        // alert(emailRef.current.value + passwordRef.current.value)

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(
                emailRef.current.value,
                passwordRef.current.value
            )
            history.push("/update-account")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="bg-gradient-primary d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="container">


                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">


                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div class="row">
                                    <div class="col-lg-5 d-none d-lg-block bg-register-image"
                                        style={{ backgroundImage: `url(${Image})` }}
                                    ></div>
                                    <div class="col-lg-7">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>

                                                {
                                                    error && <small variant="danger">{error}</small>
                                                }

                                            </div>
                                            <form class="user" onSubmit={handleSubmit}>
                                                {/* <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                                   ref={firstNameRef}
                                                   placeholder="First Name" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                   ref={lastNameRef}
                                                    placeholder="Last Name" />
                                            </div>
                                        </div> */}
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                                        ref={emailRef} required
                                                        placeholder="Email Address" />
                                                </div>

                                                {/* <div class="form-group">
                                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                                    ref={emailRef} required
                                                    id="exampleInputPassword" placeholder="Password" />
                                        </div>
                                        
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                                    ref={emailRef} required
                                                    id="exampleRepeatPassword" placeholder="Repeat Password" />
                                        </div> */}
                                                <div class="form-group row">
                                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                                        <input type="password" class="form-control form-control-user"
                                                            ref={passwordRef} required
                                                            value="123456"
                                                            id="exampleInputPassword" placeholder="Password" />
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input type="password" class="form-control form-control-user"
                                                            ref={passwordConfirmRef} required
                                                            value="123456"
                                                            id="exampleRepeatPassword" placeholder="Repeat Password" />
                                                    </div>
                                                </div>
                                                <button disabled={loading} class="btn btn-primary btn-user text-white btn-block">
                                                    Create Account

                                                </button>
                                                <hr />

                                                <div class="form-group row">
                                                    <div className="col-sm-6 mb-sm-12 text-center">
                                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6 mb-sm-12 text-center">
                                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                        </a>
                                                    </div>
                                                </div>

                                            </form>
                                            <hr />
                                            <div class="text-center">
                                                <Link to="/forgot-password">
                                                    <a class="small">Forgot Password?</a>
                                                </Link>
                                            </div>
                                            <div class="text-center">
                                                <Link to="/login">
                                                    <a class="small">Already have an account?
                                                        Log In
                                                    </a>
                                                </Link>
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
