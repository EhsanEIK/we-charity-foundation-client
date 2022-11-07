import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto my-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;