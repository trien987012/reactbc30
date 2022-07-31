import React, { Component } from 'react';

class ExProductItem extends Component {
    render() {
        let {product,xemChiTiet} =this.props;
        return (
            <div className='card'>
                      <img src={product.img} alt='...' className='w-100' />
                <div className='card-body'>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modelId"
                    onClick={()=>{
                        xemChiTiet(product);
                    }}>Detail</button>
                </div>
            </div>
        );
    }
}

export default ExProductItem;
