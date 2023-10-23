// import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Navbar, Nav, Button, Form, FormGroup, Input, Label, Checkbox } from 'bootstrap-react';

const Market = () => {

    useEffect(() => {


        // const getData = async () => {
        //     const response = await axios.post('/marketData');
        //     console.log(response.data);


        // }

        console.log("Render this Compoennt ")




    }, [])




    return (


        <>
            <div className="vh-100 d-flex justify-content-center">
                <div className="form-access my-auto">
                    <form>
                        <span>Sign In</span>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="text-right">
                            <Link to="/reset">Forgot Password?</Link>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="form-checkbox"
                            />
                            <label className="custom-control-label" htmlFor="form-checkbox">
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </form>
                    <h2>
                        Don't have an account? <Link to="/signup">Sign up here</Link>
                    </h2>
                </div>
            </div>


        </>
    )
}

export default Market