import React, { Component } from 'react';

class DemoState extends Component {
    username = "Khai do";
    status = false; // false: chua dang nhap , true : da dang nhap
    // this.state: la thuoc tinh co san duoc ke thua tu class Component cua thu vien react. cac gia tri thay doi tren giao dien se duoc chua trong thuoc tinh cua this.state
    state = {
        status: false,
    };

    renderLogin = () => {
        // neu if co return thi khong can else
        if (this.status) {
            //status = true
            return <span className="text-white">{this.username}</span>;
        }
        return (
            <button className="btn btn-danger" onClick={(e) => {
                    // chan su kien reload browser
                    e.preventDefault();
                    this.dangNhap();
                }}>Dang Nhap</button>
        )
    };
    dangNhap = () => {
        console.log("dang nhap");
        //this.state.status = true : khong duoc phep gan state truc tiep
        let newState = {status: true};//state moi de len cai state cu.
        //this.setStatus(newState): this.setState nhan vao 1 object state moi thay the cho object state cu, dong thoi render lai giao dien
        //ham setState la 1 ham bat dong bo
        this.setState({
            status: true
        }, () =>{
            //ham se tu chay sau khi state thay doi va giao dien da duoc render xong
            console.log('state',this.state);
        });

        
    };

    render() {
        return (
            <div className="container">
                <h3>Demo state</h3>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    Home <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#">
                                        Action 1
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        Action 2
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex my-2 my-lg-0">
                            {/* {this.status? <span className='text-white'>{this.username}</span> :
                            <button className="btn btn-outline-success">Dang nhap</button>} */}
                            {this.renderLogin()}
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default DemoState;
