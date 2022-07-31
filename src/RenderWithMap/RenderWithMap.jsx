//rcc
import React, { Component } from 'react';

const data =[
    {id:'1',name:'product 1',price:1000, img:'https://i.pravatar.cc?u=1'},
    {id:'2',name:'product 2',price:2000, img:'https://i.pravatar.cc?u=2'},
    {id:'3',name:'product 3',price:1000, img:'https://i.pravatar.cc?u=3'}
]

class RenderWithMap extends Component {

    renderProduct = () =>{
        //Cach1
    //     let jsxArr = []; //[<tr></tr>,<tr></tr>]
    //     for(let index = 0 ;index < data.length; index++){
    //         //moi lan duyet lay ra 1 phan tu trong mang data
    //         let prod = data[index];
    //         //tu du lieu object tao ra jsx
    //         let tr = <tr key={index}>
    //             <td>{prod.id}</td>
    //             <td>{prod.name}</td>
    //             <td>{prod.price}</td>
    //             <td><img src={data.img} alt="..." w-50/></td>
    //         </tr>
    // //add jsx vao jsxArr
    //         jsxArr.push(tr);
    //     }
    //     return jsxArr;

    //cach 2: dung map
    let jsxArr = data.map((prod, index) =>{
        return <tr key={index}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td><img src={data.img} alt="..." width={50} /></td>
                </tr> ;
    });
       return jsxArr;
    }

    renderCardProduct =()=>{
        return data.map((prod,index) =>{
            return <div className='col-4' key={index} >
                <div className='card'>
                    <img src={prod.img} alt='...' />
                    <div className="card-body">
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                        <button className='btn btn-success'>Add to card</button>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>Table product</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>img</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProduct()}
                </tbody>
            </table>
            <hr />
            <h3>Product list</h3>
            <div className='row'>
                {this.renderCardProduct()}
            </div>
               
        </div>
        );
    }
}

export default RenderWithMap;
