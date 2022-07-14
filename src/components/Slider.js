import React, { useEffect, useState } from 'react'
import imgTest from '../assets/noticias/noticia1.jpg';
function Slider() {
    const [noticias, setNoticias] = useState([]);

    const getNoticias = () => {
        let auxNoticias = [
            {
                id:1,
                titulo:'Titulo01',
                noticia:'Texto descriptivo 1',
                img: './assets/noticias/noticia1.jpg'
            },
            {
                id:2,
                titulo:'Titulo02',
                noticia:'Texto descriptivo 2',
                img: './assets/noticias/noticia2.jpg'
            },
            {
                id:3,
                titulo:'Titulo03',
                noticia:'Texto descriptivo 3',
                img: './assets/noticias/noticia3.jpg'
            }
        ]
        setNoticias(auxNoticias);
    }

    useEffect( () => {
        getNoticias();
        console.log(noticias);
    },[]);

  return (
    <div className='container'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {
                    noticias.map((noticia, i) => (
                        <div className={`carousel-item ${i === 0? "active": ""}`} data-bs-interval="10000" key={`noticia${noticia.id}`}>
                            <img src={`${noticia.img}`} className="d-block w-100" alt="..." key={`noticia-img${noticia.id}`} />
                            <div className="carousel-caption d-none d-md-block text-white" key={`noticia-block${noticia.id}`}>
                                <h5 key={`noticia-title${noticia.id}`}>{noticia.titulo}</h5>
                                <p key={`noticia-desc${noticia.id}`}>{noticia.noticia}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Slider