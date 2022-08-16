import React, { Component } from 'react'

export default class Class_Component extends Component {
    constructor(props) {
        super(props)

        this.state = { lat: null, long: null , err_message: null}
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position => {
                this.setState({ lat: position.coords.latitude , long: position.coords.longitude })
            }),
            (err => {
                this.setState({err_message: err.message})
            }) 
        )
        return (
            <>
                <div> Latitude : {this.state.lat}</div>
                <div> Longitude : {this.state.long}</div>
                {
                    this.state.err_message === null ? null : <div> Error : {this.state.err_message}</div>
                }
            </>
        )
    }
}
