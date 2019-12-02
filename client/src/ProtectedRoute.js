import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

//This file defines a protected route for an admin

 const ProtectedRoute = ({ component: Component, isAdmin,...rest }) => {
   
    return(
        <Route 
            {...rest}
            render={props => {
                if(isAdmin)
                    return <Component {...props} />
                else
                    return (
                        <Redirect to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }
                        }/>
                    )
                        
            }}
        />
    );
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(ProtectedRoute)




