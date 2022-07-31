import React, { Component } from 'react';

class HandleEvent extends Component {
    handleClick =(e) => {
        alert('hello cybersoft');
    }

    showMessage = (name) =>{
        alert('Hello  '+ name);
        
    }

    // render ra giao dien chi render primitve value : string, boolean, number ,jsx (the html cua react)
    render() {
        return (
            <div className='container'>
                <h3>Handle Event Click</h3>
                <button className='btn btn-danger' onClick={(e) => {

                    //goi ham khac(truyen tham so)
                    this.showMessage('Trien')

                }}>Click</button>
                <button className='btn btn-success ms-4' onClick={this.handleClick}>Click</button>
                <h3>Handle Event change</h3>
                <input className='form-control w-25' onChange={(e) =>{
                    //e.target: chinh la the input
                    var tagInput = e.target.value;
                    console.log('value', tagInput.value);
                }} />
            </div>
        );
    }
}

export default HandleEvent;
