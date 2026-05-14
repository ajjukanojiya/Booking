'use client';
import { useState } from 'react';


export default function PassengerPage() {


    const [count, setCount] = useState(1);
    const [options, setOptions] = useState({
        max2: false,
    });

    const handleCountChange = (val) => {
        setCount(count + val);
    };

    const handleOptionChange = (option) => {
        setOptions({
            ...options,
            [option]: !options[option],
        });
    };


    return (
        <>

            <div className="inner-container">

                <div className="login-bg">
                    <div className="title1">What’s the maximum number of<br /> riders you can take?</div>
                    <div className="login-box">

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">



                                    <div className="passenger-section">


                                        <div className="counter">
                                            <div className="btn-circle" onClick={() => handleCountChange(-1)}>−</div>
                                            <div id="count">{count}</div>
                                            <div className="btn-circle plus" onClick={() => handleCountChange(1)}>+</div>
                                        </div>

                                        <div className="divider"></div>


                                        <div className="title">Passenger options</div>

                                        <div className="option">
                                            <input type="checkbox" />
                                            <div className="option-text">
                                                <strong>Max. 2 in the back</strong>
                                                Think comfort, keep the middle seat empty
                                            </div>
                                        </div>


                                        <button className="continue-btn">Continue</button>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}   