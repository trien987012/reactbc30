import React, { Component } from 'react';
import SanPham from './SanPham';

const data =[
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./images/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/applephone.jpg" }
  ]
class BaiTapXemChiTiet extends Component {
    state ={
        sanPhamChiTiet: 
            { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/applephone.jpg" }

    }
    renderProduct = () =>{
        return data.map((dienThoai,index) => {
            return <div className='col-4' key={index}>
                <SanPham dienThoai={dienThoai}
                xemChiTiet={this.xemChiTiet}/>
            </div>
        });
    }

    xemChiTiet = (sanPhamClick) => {
        console.log(sanPhamClick);

        this.setState({
            sanPhamChiTiet:sanPhamClick
        })
    }

    render() {
        let {tenSP,maSP,hinhAnh,ram,rom,manHinh,heDieuHanh,cameraSau,cameraTruoc,giaBan} = this.state.sanPhamChiTiet;
        return (
            <div className='container'>
                <h3>Danh sach san pham</h3>
                <div className='row'>
                        {this.renderProduct()}
                </div>
                <div className='mt-2'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3 className='text-center'>{tenSP}</h3>
                            <img className='w-100' src={hinhAnh} alt='...'/>
                        </div>
                        <div className='col-8 '>
                            <h3 className='text-center'>Thong so ky thuat</h3>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>man hinh</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>he dieu hanh</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>camera truoc</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>camera sau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>Rom</td>
                                        <td>{rom}</td>
                                    </tr>
                                    <tr>
                                        <td>MaSP</td>
                                        <td>{maSP}</td>
                                    </tr>
                                    <tr>
                                        <td>Gia Ban</td>
                                        <td>{giaBan}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapXemChiTiet;
