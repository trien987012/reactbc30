//rcc
import React, { Component } from 'react';

class BaiTapState extends Component {

    state ={
        imgSrc:'./img/products/black-car.jpg', //state default
        fSize:16
    }


    render() {
        return (
            <div className='container'>
                <h3>Bai tap 1: Bai tap chon mau xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img className='w-100' src={this.state.imgSrc} alt='...'/>
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-danger m-2' onClick={()=>{
                            //thay doi hinh
                            this.setState({
                                imgSrc:'./img/products/red-car.jpg'
                            })
                        }}>Red</button>
                        <button className='btn btn-dark m-2' onClick={()=>{
                            //thay doi hinh
                            this.setState({
                                imgSrc:'./img/products/black-car.jpg'
                            })
                        }}>black</button>
                        <button className='btn btn-secondary m-2' onClick={()=>{
                            //thay doi hinh
                            this.setState({
                                imgSrc:'./img/products/silver-car.jpg'
                            })
                        }}>silver</button>
                        <button className='btn btn-default m-2 border'onClick={()=>{
                            //thay doi hinh
                            this.setState({
                                imgSrc:'./img/products/steel-car.jpg'
                            })
                        }}>steel</button>

                    </div>
                </div>
                <h3>Bai tap 2: tang giam font-size</h3>
                <p style={{fontSize:this.state.fSize}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus facilis amet deserunt! Aspernatur minus ratione animi consequuntur, accusantium, quia cum minima officiis, sed ipsum rem doloremque at sit earum?

                </p>
                <button className='btn btn-primary m-2' onClick={()=>{
                    this.setState({
                        fSize: this.state.fSize +1
                    })
                }}>+</button>
                <button className='btn btn-primary m-2' onClick={()=>{
                    this.setState({
                        fSize: this.state.fSize -1
                    })
                }}>-</button>
            </div>
        );
    }
}

export default BaiTapState;
