//rcc
import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        let {dienThoai,xemChiTiet} =this.props;
        return (
            <div className='card'>
            <img src={dienThoai.hinhAnh} alt='...' height={400}/>
            <div className='card-body'>
                <h3>{dienThoai.tenSP}</h3>
                <p>{dienThoai.giaBan.toLocaleString()} VND</p>
                <button className='btn btn-success' onClick={()=>{
                    xemChiTiet(dienThoai);
                }}>Xem chi tiet</button>
            </div> 
        </div>
        );
    }
}

export default SanPham;
