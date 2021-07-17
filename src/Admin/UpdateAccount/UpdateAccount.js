import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory, Redirect } from "react-router-dom"
import Image from "../../img/register.jpg"
import { app, firestore, storage } from "../../firebase"
import publicIp from "react-public-ip"
import Spinner from "../Spinner/Spinner"
export default function UpdateAccount() {

    let firstNameRef = useRef()
    let lastNameRef = useRef()
    let phoneRef = useRef()
    let addressRef = useRef()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    let [profileImage, setProfileImage] = useState(null)
    const [image, setImage] = useState(null)

    const history = useHistory()

    const { currentUser, currentUserData } = useAuth()
    const users = firestore.collection("/users");


            // React.useEffect(()=>{


                if(currentUserData.dp)
                profileImage = currentUserData.dp
            
                // firstNameRef.current.value = currentUserData.name
                // // lastNameRef.current.value = currentUserData.
                // phoneRef.current.value = currentUserData.phone
                // addressRef.current.value = currentUserData.address

            // },[])





    var imageUrl;
    let ipv4;

    publicIp.v4()
        .then((ip) => {
            ipv4 = ip;

        })

    async function handleSubmit(e) {
        e.preventDefault();

        let value = {
            dp: profileImage,
            name: firstNameRef.current.value + ' ' + lastNameRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            createdOn: app.firestore.FieldValue.serverTimestamp(),
            lastLogin: app.firestore.FieldValue.serverTimestamp(),
            ip: ipv4,
        }

        users.doc(currentUser.uid).update(value)
            .then(res => {
                setError("")
                history.push("/dashboard")
                console.log("Success: account updated:");

            })
            .catch(error => {

                setError("Failed to update account")
                console.error("Error: account updat: ", error);

            });
    }

    // if (currentUser) {
    // return <Redirect to="/dashboard" />

    // alert(currentUser.uid)
    // }
    // console.log(currentUser)



    const profileUpload = (image) => {

        const fileName = currentUser.uid + "." + image.name.split('.').pop()

        const uploadTask = storage.ref(`images/profileImages/${fileName}`).put(image);
        setLoading(true)
        uploadTask.on(
            "state_changed",
            snapshot => {
                // setLoading(true)
                // const progress = Math.round(
                //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                // );
                // setProgress(progress);

            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images/profileImages")
                    .child(fileName)
                    .getDownloadURL()
                    .then(url => {
                        // setLoading(false)

                        // profileImage = url;
                        setProfileImage(url)
                        setLoading(false)
                    });
            }
        );


    };


    function handleChange(e) {
        if (e.target.files[0]) {

            profileUpload(e.target.files[0])
            setProfileImage(false)
            // console.log()
            // setProfileImage(e.target.files[0])
            // setImage(URL.createObjectURL(e.target.files[0]))
        }


    }

    console.log(profileImage)

    return (
        <div className="bg-gradient-primary d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div class="container">

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
                                        <h1 class="h4 text-gray-900 mb-4">Update Account</h1>
                                    </div>


                                    <form class="user" onSubmit={handleSubmit}>

                                        <div class="form-group row my-4">
                                            <span className="rounded-circle position-relative mx-auto overflow-hidden"
                                                style={{ width: "100px", height: "100px", background: "#0000" }}
                                            >


                                                {

                                                    (profileImage === null) ?

                                                        <img className="rounded-circle p-1 border border-default"
                                                            src="https://www.sbcc.sg/wp-content/themes/healthway/images/user-default.png"
                                                            style={{ width: "100%", height: "100%" }} />
                                                        :

                                                        (!profileImage) ?

                                                            <Spinner />
                                                        :

                                                            <img
                                                                className="rounded-circle p-1 border border-default"
                                                                src={profileImage}
                                                                style={{ width: "100%", height: "100%" }}
                                                            />
                                                }


                                                <input type="file" className="fileToUpload" onChange={handleChange} multiple accept=".jpg, .png" /> */}
                                            </span>

                                        </div>

                                        <div class="form-group row my-4">
                                            {
                                                error && <small variant="danger" className="mx-auto text-danger" text-center>{error}</small>
                                            }
                                        </div>

                                        <div class="form-group row">
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
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control form-control-user"
                                                ref={phoneRef} required
                                                placeholder="Phone" />
                                        </div>

                                        <div class="form-group">
                                            <textarea class="form-control form-control-user"
                                                ref={addressRef} required
                                                style={{ borderRadius: '10px', paddingTop: "2", resize: 'none' }} placeholder="Full Address" rows="2"></textarea>
                                        </div>

                                        <hr />
                                        <div class="form-group text-right">
                                            <button class="btn btn-danger text-white mx-2">
                                                Skip
                                            </button>
                                            <button disabled={loading} class="btn btn-primary text-white">
                                                Next
                                            </button>

                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
