import React, { Component } from 'react';

class Card extends Component {
    render() {
        /*
            so sanh this.state va this.props
            + state va props: deu la thuoc tinh co san cua react class component dung de binding du lieu ra giao dien.
            + state lam nhiem  vu quan ly cac gia tri thay doi tren giao dien va co the gan lai gia tri moi thong q3ua ham setState
            + props lam nhiem vu nhan gia tri tu noi su dung the (component cha) truyen vao va khong duoc gan  lai (readonly)

        */
        //this.props la thuoc tinh co san cua component dung de nhan gia tri tu component cha truyen vao
        console.log(this.props);
        let {tenSP,gia} = this.props;
        return (
            <div class="card text-white bg-primary">
              <img class="card-img-top" src="holder.js/100px180/" alt="Title"/>
              <div class="card-body">

                <h4 class="card-title">{tenSP}</h4>
                <p class="card-text">{gia}</p>
              </div>
            </div>

        );
    }
}

export default Card;
