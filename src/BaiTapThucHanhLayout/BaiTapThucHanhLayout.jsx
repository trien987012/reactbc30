import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import './styles.css';

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
        <div className='container' >
            <Header />
            <Body />
            <Footer />
        </div>
        );
    }
}

export default BaiTapThucHanhLayout;
