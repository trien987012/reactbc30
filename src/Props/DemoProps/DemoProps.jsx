import React, { Component } from 'react';
import Card from './Card';
import BaiViet from './BaiViet';

const dsBaiViet = [
    {tieuDe:'tieu de 1', noiDung:'okokok11'},
    {tieuDe:'tieu de 1', noiDung:'okokok11'},
    {tieuDe:'tieu de 1', noiDung:'okokok11'}
]

class DemoProps extends Component {


    render() {
        const tenSP ='okscb';
        const gia = 1000;
        const baiViet ={
            tieuDe:'lam bai tap',
            noiDung: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eligendi amet, quos dolorum velit laboriosam. Cum reprehenderit illum iusto esse, deleniti quos, natus, in quidem assumenda aliquid ut accusamus corrupti!'
        }

        return (
            <div className='container' style={{marginBottom:500}}>
                <div className='w-25'>
                    <Card tenSP={tenSP} gia={gia} />
                </div>
                <div className='w-25'>
                    <Card tenSP={'kobcs'} gia={3000} />
                </div>
                <hr />
                <h3>Demo bai viet</h3>
                {dsBaiViet.map((baiViet,index)=>{
                    return <div key={index} >
                        <BaiViet obBaiViet = {baiViet}/>
                    </div>

                })}
            </div>
        );
    }
}

export default DemoProps;
