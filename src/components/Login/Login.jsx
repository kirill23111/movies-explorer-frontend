import HeaderLogo from '../HeaderLogo/HeaderLogo';
import { Link } from 'react-router-dom';
import './Login.css';

export function Login() {
    return <div className="login">
        <div className="login__container" >
            <div className='register__container-start'>
                <HeaderLogo />
                <p className='login__container-header' >Рады видеть!</p>
            </div>
            <div className='login__container-input-container' >
                <div className='login__container-box' >
                    <p className='login__container-box-text'>E-mail</p>
                    <input className='login__container-box-input' />
                </div>
                <div className='login__container-box' >
                    <p className='login__container-box-text'>Пароль</p>
                    <input className='login__container-box-input' />
                </div>
            </div>
            <div className='login__container-button-block' >
                <Link to='/profile' className='login__container-links' >
                    <div className='login__container-button-button'>
                        <p className='login__container-button-text'>Войти</p>
                    </div>
                </Link>
                <div className='login__container-question-block'>
                    <p className='login__container-button-question'>Ещё не зарегистрированы?</p>
                    <Link to='/signup' style={{ textDecoration: 'none' }} >
                        <p className='login__container-button-register'>Регистрация</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}