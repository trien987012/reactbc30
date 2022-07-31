//rcc
import React, { Component } from 'react';
import ExModal from './ExModal';
import ExProductList from './ExProductList';

class ExerciseCarStore extends Component {
    state = {
        modalState: {
            id: 1, name:'black-car', img:'./img/products/black-car.jpg', price:1000
        }
    }
    xemChiTiet = (sanPhamClick) =>{

        // console.log(sanPhamClick);
        this.setState({
            modalState:sanPhamClick
        })

    }

    render() {
        return (
            <div className='container'>
                <h3>Danh sach xe</h3>
                <ExModal modalState={this.state.modalState}/>
                <ExProductList xemChiTiet={this.xemChiTiet}/>
            </div>
        );
    }
}

export default ExerciseCarStore;
