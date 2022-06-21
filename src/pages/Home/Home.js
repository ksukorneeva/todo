import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { SiTodoist } from 'react-icons/si';
import './Home.scss';
import background from './img/bg.png';

const Home = () => {
    return (
        <>
            <header className='header container'>
                <div className='header__menu menu'>
                    <div className='menu__logo'>
                        <SiTodoist />
                        <p>Todo Daily</p>
                    </div>
                    <ul className='menu__nav'>
                        <li>Login</li>
                        <li>Singup</li>
                    </ul>
                </div>
                <div className='header__content'>
                    <h1>Organizing your day activity with Todo Daily</h1>
                    <button className='btn'>Get started</button>
                    <div className='img'>
                        <img src={background} alt='active' />
                    </div>
                </div>
            </header>
            <section className='active container'>
                <h1>Don’t let your day doing nothing</h1>
                <div className='active__cards'>
                    <div className='card'>
                        {/* <icon />/ */}
                        <p>Small task</p>
                    </div>
                    <div className='card'>
                        {/* <icon /> */}
                        <p>Write it</p>
                    </div>
                    <div className='card'>
                        {/* <icon /> */}
                        <p>Do it</p>
                    </div>
                    <div className='card'>
                        {/* <icon /> */}
                        <p>Repeat</p>
                    </div>
                </div>
            </section>
            <section className='target container'>
                <div className='target__img'>
                    <img src='' alt='target' />
                </div>
                <div className='target__text'>
                    <h2>Achieve your target and won your life</h2>
                    <button className='btn'>Get started</button>
                </div>
            </section>
            <footer className='footer container'></footer>
        </>
    );
};

export default Home;
