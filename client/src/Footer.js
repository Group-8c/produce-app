import React from 'react';

const footerStyle = {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
}

function Footer() {
    return (
        <div id="Contact" style={footerStyle}>
            <div className="masthead-followup row m-0">
                <div className="col-12 col-md-4 p-3 p-md-5">
                    {/* image/icon here */}
                    <h3>Contact</h3>
                    <p>Description</p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5">
                    {/*  */}
                    <h3>Other Information</h3>
                    <p>Description</p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5">
                    {/*  */}
                    <h3>...</h3>
                    <p>
                        Description
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;