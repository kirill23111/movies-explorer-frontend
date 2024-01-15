import './Movies.css';
import Header from '../Header/Header';
import data from '../../data.json';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

export function Movies() {

    const [state, setState] = useState(true);
    const [detect, setDetect] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 767 && window.innerWidth < 1280) {
            setDetect(true)
        }
    }, [])

    return <div className="movies" >
        <Header isLoggedIn />
        <div className='movies__container_search'>
            <div className='movies__container_search-block' >
                <div className='movies__container_searching' >
                    <div className='movies__container_search-icon' >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7927 18.2638C17.3608 19.6957 15.0392 19.6957 13.6073 18.2638C12.1754 16.8318 12.1754 14.5102 13.6073 13.0783C15.0392 11.6464 17.3608 11.6464 18.7927 13.0783C20.2247 14.5102 20.2247 16.8318 18.7927 18.2638ZM19.2331 19.6467C17.2729 21.1461 14.4573 20.9994 12.6645 19.2066C10.7119 17.254 10.7119 14.0881 12.6645 12.1355C14.6171 10.1829 17.7829 10.1829 19.7355 12.1355C21.5283 13.9283 21.6751 16.7437 20.1759 18.7039L23.7426 22.2706L22.7998 23.2134L19.2331 19.6467Z" fill="#A0A0A0" />
                        </svg>
                    </div>
                    <input className='movies__container_searching-input' placeholder='Фильм' />
                </div>
                <div className='movies__container_filter' >
                    <div className='movies__container_filter-button' >
                        <p className='movies__container_filter-button-text' >Найти</p>
                    </div>
                    <div className='movies__container_filter-line' />
                    <div className='movies__container_filter-box' >
                        {state ? <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="20" rx="10" fill="#343434" />
                            <circle cx="26" cy="10" r="8" fill="#2BE080" />
                            <circle cx="26" cy="10" r="7.5" stroke="white" />
                        </svg> : <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="20" rx="10" fill="#343434" />
                            <circle cx="10" cy="10" r="8" fill="#2F2F2F" />
                            <circle cx="10" cy="10" r="7.5" stroke="white" />
                        </svg>}
                        <p className='movies__container_filter-text'>Короткометражки</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='movies__container_filter-box-mobile' >
            {state ? <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="20" rx="10" fill="#343434" />
                <circle cx="26" cy="10" r="8" fill="#2BE080" />
                <circle cx="26" cy="10" r="7.5" stroke="white" />
            </svg> : <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="20" rx="10" fill="#343434" />
                <circle cx="10" cy="10" r="8" fill="#2F2F2F" />
                <circle cx="10" cy="10" r="7.5" stroke="white" />
            </svg>}
            <p className='movies__container_filter-text'>Короткометражки</p>
        </div>
        <div className='movies__container_filter-divider' />
        <div className='movies__container_films-table' >
            <div className='movies__container_films-first'>
                {data.map((x, i) => (detect ? (i < 2) : (i < 4)) && <div className='movies__container_films-container'>
                    <div className='movies__container_films-container-data' >
                        <img src={require(`../../images/${i + 1}.png`)} alt='' />
                        <div className='movies__container_films-title-box' >
                            <p className='movies__container_films-container-title' >{x.title}</p>
                            {[1].includes(i + 1) ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="#EE3465" />
                            </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="white" />
                            </svg>}
                        </div>
                    </div>
                    <div className='movies__container_films-container-time' >
                        <div className='movies__container_films-divider' />
                        <p className='movies__container_films-container-time' >1ч42м</p>
                    </div>
                </div>)}
            </div>
            <div className='movies__container_films'>
                {data.map((x, i) => (detect ? (i > 1 && i < 4) : (i > 3 && i < 8)) && <div className='movies__container_films-container'>
                    <div className='movies__container_films-container-data' >
                        <img src={require(`../../images/${i + 1}.png`)} alt='' />
                        <div className='movies__container_films-title-box' >
                            <p className='movies__container_films-container-title' >{x.title}</p>
                            {[5, 6].includes(i + 1) ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="#EE3465" />
                            </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="white" />
                            </svg>}
                        </div>
                    </div>
                    <div className='movies__container_films-container-time' >
                        <div className='movies__container_films-divider' />
                        <p className='movies__container_films-container-time' >1ч42м</p>
                    </div>
                </div>)}
            </div>
            <div className='movies__container_films'>
                {data.map((x, i) => (detect ? (i > 3 && i < 6) : (i > 7 && i < 12)) && <div className='movies__container_films-container'>
                    <div className='movies__container_films-container-data' >
                        <img src={require(`../../images/${i + 1}.png`)} alt='' />
                        <div className='movies__container_films-title-box' >
                            <p className='movies__container_films-container-title' >{x.title}</p>
                            {[9].includes(i + 1) ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="#EE3465" />
                            </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="white" />
                            </svg>}
                        </div>
                    </div>
                    <div className='movies__container_films-container-time' >
                        <div className='movies__container_films-divider' />
                        <p className='movies__container_films-container-time' >1ч42м</p>
                    </div>
                </div>)}
            </div>
            <div className='movies__container_films'>
                {data.map((x, i) => (detect ? (i > 5 && i < 8) : (i > 11 && i < 16)) && <div className='movies__container_films-container'>
                    <div className='movies__container_films-container-data' >
                        <img src={require(`../../images/${i + 1}.png`)} alt='' />
                        <div className='movies__container_films-title-box' >
                            <p className='movies__container_films-container-title' >{x.title}</p>
                            {[16].includes(i + 1) ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="#EE3465" />
                            </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z" fill="white" />
                            </svg>}
                        </div>
                    </div>
                    <div className='movies__container_films-container-time' >
                        <div className='movies__container_films-divider' />
                        <p className='movies__container_films-container-time' >1ч42м</p>
                    </div>
                </div>)}
            </div>
        </div>
        <div className='movies__container-more'>
            <p className='movies__container-more-text'>Ещё</p>
        </div>
        <Footer />
    </div>
}