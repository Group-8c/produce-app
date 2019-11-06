import React from 'react';
import { Jumbotron } from 'react-bootstrap'

function Services() {
    return (
        <div id="Services">
            <Jumbotron fluid>
                <div className="page-header">
                    <h1>Services</h1>
                </div>
            </Jumbotron>

            <div className="masthead-followup row m-0 border border-white">
                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    {/* image/icon here */}
                    <h3>Service 1</h3>
                    <p>Description</p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    {/*  */}
                    <h3>Service 2</h3>
                    <p>Description</p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white">
                    {/*  */}
                    <h3>Service 3</h3>
                    <p>
                        Description
                    </p>
                    <hr className="half-rule"/>
                </div>
            </div>
        </div>
    );
}

export default Services;