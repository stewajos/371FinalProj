import React from 'react'
import ReactDom from 'react-dom'

export class header extends React.Component{

    render(){
            return (
                <div className = "Header">
                    <h1>Weather Report</h1>
                    <h3> By Joshua Stewart</h3>
                </div> 

            );
    }
};

export default header;