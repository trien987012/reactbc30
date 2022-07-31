import React, { Component } from 'react';
// import './style1.css';

const data =[
    {
      "maPhim": 1283,
      "tenPhim": "Trainwreck",
      "biDanh": "trainwreck",
      "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1284,
      "tenPhim": "Inside Out",
      "biDanh": "inside-out",
      "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/insideout.jpg",
      "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1285,
      "tenPhim": "Home",
      "biDanh": "home",
      "trailer": "https://www.youtube.com/embed/MyqZf8LiWvM",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/home.jpg",
      "moTa": "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1286,
      "tenPhim": "Batman v Superman: Dawn of Justice",
      "biDanh": "batman-v-superman-dawn-of-justice",
      "trailer": "https://www.youtube.com/embed/0WWzgGyAH6Y",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
      "moTa": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1287,
      "tenPhim": "Ant-Man",
      "biDanh": "ant-man",
      "trailer": "https://www.youtube.com/embed/1HpZevFifuo",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/antman.jpg",
      "moTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1288,
      "tenPhim": "Jurassic World",
      "biDanh": "jurassic-world",
      "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
      "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1289,
      "tenPhim": "Fantastic Four",
      "biDanh": "fantastic-four",
      "trailer": "https://www.youtube.com/embed/AAgnQdiZFsQ",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
      "moTa": "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1290,
      "tenPhim": "Mad Max: Fury Road",
      "biDanh": "mad-max-fury-road",
      "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg",
      "moTa": "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1291,
      "tenPhim": "True Detective",
      "biDanh": "true-detective",
      "trailer": "https://www.youtube.com/embed/TXwCoNwBSkQ",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/truedetective.jpg",
      "moTa": "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1292,
      "tenPhim": "The Longest Ride",
      "biDanh": "the-longest-ride",
      "trailer": "https://www.youtube.com/embed/FUS_Q7FsfqU",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
      "moTa": "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1293,
      "tenPhim": "The Walking Dead",
      "biDanh": "the-walking-dead",
      "trailer": "https://www.youtube.com/embed/R1v0uFms68U",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
      "moTa": "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1294,
      "tenPhim": "Southpaw",
      "biDanh": "southpaw",
      "trailer": "https://www.youtube.com/embed/Mh2ebPxhoLs",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
      "moTa": "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1295,
      "tenPhim": "Specter",
      "biDanh": "specter",
      "trailer": "https://www.youtube.com/embed/LTDaET-JweU",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/spectre.jpg",
      "moTa": "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    },
    {
      "maPhim": 1296,
      "tenPhim": "Avengers: Infinity War ",
      "biDanh": "avengers-infinity-war",
      "trailer": "https://www.youtube.com/embed/DKqu9qc-5f4",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
      "moTa": "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
      "maNhom": "GP00",
      "ngayKhoiChieu": "2019-07-29T00:00:00",
      "danhGia": 5
    }
]

class BaiTapRender extends Component {
    render() {
        return (
            <div className='content'>
            <div style={{minHeigth: '100vh',background:'rgba(0,0,0,0.5)'}}>
                <nav class="navbar navbar-expand-sm navbar-dark style={{background:'rgba(110,203,200,0.9)'}}">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#">Action 1</a>
                                    <a class="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex my-2 my-lg-0">
                            <input class="form-control me-sm-2" type="text" placeholder="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className='container-fluid'>
                    <div className='row'>
                        {data.map((prod,index) =>{
                            return <div className='col-2 mt-2' key={index}>
                                    <div className='card'>
                                        <img src='https://i.pravatar.cc?u=1' alt='...'/>
                                        <div className='card-body bg-dark text-white'>
                                            <h2 style={{height:75}}>{prod.tenPhim}</h2>
                                            <p style={{heigth:100}}>{prod.moTa.length > 100 ? prod.moTa.substring(0,100) + '...' : prod.moTa}</p>
                                        </div>
                                    </div>
                                </div>

                        })}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default BaiTapRender;
