import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <div className='techs'>
            <div className='techs__title-container'>
                <p className='techs__title'>
                    Технологии
                </p>
                <div className='techs__divider' />
            </div>
            <div className='techs__container'>
                <p className='techs__container-header'>7 технологий</p>
                <p className='techs__container-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className='techs__stacks-container'>
                <div className='techs__stacks-both-box'>
                    <div className='techs__stacks-box'>
                        <p className='techs__stacks-text'>HTML</p>
                    </div>
                    <div className='techs__stacks-box'>
                        <p className='techs__stacks-text'>CSS</p>
                    </div>
                </div>
                <div className='techs__stacks-both-box'>
                    <div className='techs__stacks-box'>
                        <p className='techs__stacks-text'>JS</p>
                    </div>
                    <div className='techs__stacks-box'>
                        <p className='techs__stacks-text'>React</p>
                    </div>
                </div>
                <div className='techs__stacks-both-box'>
                    <div className='techs__stacks-box'>
                        <p className='techs__stacks-text'>Git</p>
                    </div>
                    <div className='techs__stacks-box'>
                        <p className='techs__stacks-text'>Express.js</p>
                    </div>
                </div>
                <div className='techs__stacks-both-boxAlone'>
                    <div className='techs__stacks-box'>
                        <p className='techs__stacks-text'>mongoDB</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Techs;