import './SavedMovies.css';
import Header from '../Header/Header';
import data from '../../data.json';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';

export function SavedMovies() {

    const [state, setState] = useState(true);
    const [detect, setDetect] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 767 && window.innerWidth < 1280) {
            setDetect(true)
        }
    }, [])

    return <div className="saved-movies" >
        <Header isLoggedIn />
        <div className='saved-movies__container_search'>
            <div className='saved-movies__container_search-block' >
                <div className='saved-movies__container_searching' >
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7927 18.2638C17.3608 19.6957 15.0392 19.6957 13.6073 18.2638C12.1754 16.8318 12.1754 14.5102 13.6073 13.0783C15.0392 11.6464 17.3608 11.6464 18.7927 13.0783C20.2247 14.5102 20.2247 16.8318 18.7927 18.2638ZM19.2331 19.6467C17.2729 21.1461 14.4573 20.9994 12.6645 19.2066C10.7119 17.254 10.7119 14.0881 12.6645 12.1355C14.6171 10.1829 17.7829 10.1829 19.7355 12.1355C21.5283 13.9283 21.6751 16.7437 20.1759 18.7039L23.7426 22.2706L22.7998 23.2134L19.2331 19.6467Z" fill="#A0A0A0" />
                    </svg>
                    <input className='saved-movies__container_searching-input' placeholder='Фильм' />
                </div>
                <div className='saved-movies__container_filter' >
                    <div className='saved-movies__container_filter-button' >
                        <p className='saved-movies__container_filter-button-text' >Найти</p>
                    </div>
                    <div className='saved-movies__container_filter-line' />
                    <div className='saved-movies__container_filter-box' >
                        {state ? <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="20" rx="10" fill="#343434" />
                            <circle cx="26" cy="10" r="8" fill="#2BE080" />
                            <circle cx="26" cy="10" r="7.5" stroke="white" />
                        </svg> : <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="20" rx="10" fill="#343434" />
                            <circle cx="10" cy="10" r="8" fill="#2F2F2F" />
                            <circle cx="10" cy="10" r="7.5" stroke="white" />
                        </svg>}
                        <p className='saved-movies__container_filter-text'>Короткометражки</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='saved-movies__container_filter-box-mobile' >
            {state ? <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="20" rx="10" fill="#343434" />
                <circle cx="26" cy="10" r="8" fill="#2BE080" />
                <circle cx="26" cy="10" r="7.5" stroke="white" />
            </svg> : <svg onClick={() => setState(!state)} width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="20" rx="10" fill="#343434" />
                <circle cx="10" cy="10" r="8" fill="#2F2F2F" />
                <circle cx="10" cy="10" r="7.5" stroke="white" />
            </svg>}
            <p className='saved-movies__container_filter-text'>Короткометражки</p>
        </div>
        <div className='saved-movies__container_filter-divider' />
        <div className='saved-movies__container_films-table' >
            <div className='saved-movies__container_films-first'>
                {data.map((x, i) => (detect ? i < 2 : i < 3) && <div className='saved-movies__container_films-container'>
                    <div className='saved-movies__container_films-container-data' >
                        <img src={require(`../../images/${i + 1}.png`)} alt='Фильм' />
                        <div className='saved-movies__container_films-title-box' >
                            <p className='saved-movies__container_films-container-title' >{x.title}</p>
                            <svg className='saved-movies__container_films-cross' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.0605L14.6516 15.7121L15.7122 14.6514L13.0607 11.9999L15.7121 9.34844L14.6514 8.28778L12 10.9392L9.34826 8.28748L8.2876 9.34814L10.9393 11.9999L8.28748 14.6517L9.34814 15.7124L12 13.0605Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className='saved-movies__container_films-container-time' >
                        <div className='saved-movies__container_films-divider' />
                        <p className='saved-movies__container_films-container-time' >1ч42м</p>
                    </div>
                </div>)}
            </div>
            <div className='saved-movies__container_films-tablet'>
                {data.map((x, i) => i === 2 && <div className='saved-movies__container_films-container'>
                    <div className='saved-movies__container_films-container-data' >
                        <img src={require(`../../images/${i + 1}.png`)} alt='Фильм' />
                        <div className='saved-movies__container_films-title-box' >
                            <p className='saved-movies__container_films-container-title' >{x.title}</p>
                            <svg className='saved-movies__container_films-cross' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#313131" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.0605L14.6516 15.7121L15.7122 14.6514L13.0607 11.9999L15.7121 9.34844L14.6514 8.28778L12 10.9392L9.34826 8.28748L8.2876 9.34814L10.9393 11.9999L8.28748 14.6517L9.34814 15.7124L12 13.0605Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className='saved-movies__container_films-container-time' >
                        <div className='saved-movies__container_films-divider' />
                        <p className='saved-movies__container_films-container-time' >1ч42м</p>
                    </div>
                </div>)}
                <div style={{ width: '50%' }} />
            </div>
        </div>
        <Footer />
    </div>
}