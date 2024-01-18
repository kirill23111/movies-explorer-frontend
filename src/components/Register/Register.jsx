import { Link } from 'react-router-dom';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import './Register.css';

export function Register() {
    return <div className="register">
        <div className="register__container" >
            <div className='register__container-start'>
                <HeaderLogo />
                <p className='register__container-header' >Добро пожаловать!</p>
            </div>
            <div className='register__container-input-container' >
                <div className='register__container-box' >
                    <p className='register__container-box-text'>Имя</p>
                    <input className='register__container-box-input' />
                </div>
                <div className='register__container-box' >
                    <p className='register__container-box-text'>E-mail</p>
                    <input className='register__container-box-input' />
                </div>
                <div className='register__container-box' >
                    <p className='register__container-box-text'>Пароль</p>
                    <input className='register__container-box-input' />
                </div>
            </div>
            <div className='register__container-button-block' >
                <Link to='/profile' style={{ textDecoration: 'none', width: '100%' }} >
                    <div className='register__container-button-button'>
                        <p className='register__container-button-text'>Зарегистрироваться</p>
                    </div>
                </Link>
                <div className='register__container-question-block'>
                    <p className='register__container-button-question'>Уже зарегистрированы?</p>
                    <Link to='/signin' style={{ textDecoration: 'none' }} >
                        <p className='register__container-button-register'>Войти</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}