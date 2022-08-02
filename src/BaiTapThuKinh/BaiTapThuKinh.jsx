import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';

class BaiTapThuKinh extends Component {

    state = {
        glassesCurrent: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () => {
        return dataGlasses.map((glassesItem,index) => {
            return <img onClick={()=>{
                this.changeGlasses(glassesItem)
            }} className='m-2 p-2 border border-width-1' style={{width:'110px',cursor:'pointer'}} src={glassesItem.url} alt='...' key={index}/>
        })
    }

    changeGlasses = (newGlasses)=>{
        this.setState({
            glassesCurrent:newGlasses
        })
    }

    render() {
        const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
            from{
                width: 0px;
                transform:rotate(20deg);
                opacity:0.2;
            }
            to{
                width: 150px;
                transform:rotate(0deg);
                opacity:0.6;
            }
        }`

        const styleGlasses ={
            width: '150px',
            top: '75px',
            right: '68px',
            opacity: '.6',
            animation:`animChangeGlasses${Date.now()} 1s`
        }

        const infoGlasses ={
            width: '250px',
            left: '267px',
            top: '200px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            paddingLeft: '15px',
            height: '104px',
        }
        return (
            <div style={{backgroundImage:'url(./glassesImage/background.jpg)',backgroundSize:'1310px',minHeight:'2000px'}}>
                <style>
                    {keyFrame}
                </style>
                <div style={{backgroundColor:'rgba(0,0,0,.2)',minHeight:'2000px'}}>
                    <h3 style={{backgroundColor:'rgba(0,0,0,.3)'}} className='text-center text-light p-3'>TRY GLASS APP ONLINE</h3>
                    <div className='container'>
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='position-absolute' style={{width:'250px'}} src='./glassesImage/model.jpg' alt='model'/>
                                    <img style={styleGlasses} className='position-absolute' src={this.state.glassesCurrent.url} alt='test' />
                                    <div style={infoGlasses} className='position-relative'>
                                        <span style={{color:'#009ACD',fontSize:'18px'}} className='font-weight-bold'>{this.state.glassesCurrent.name}</span><br/>
                                        <span style={{fontSize:'13px',fontWeight:'400'}}>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                            <img style={{width:'250px'}} src='./glassesImage/model.jpg' alt='model'/>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light container text-center mt-5 d-flex justify-content-center'>
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapThuKinh;
