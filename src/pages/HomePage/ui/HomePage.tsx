import React from 'react';
import { MainContent } from 'src/widgets/MainContent';
import { images } from 'src/shared/assets/icons/images';
import cls from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <div className={cls.mainContent}>
            <div className={cls.container}>
                <MainContent />
                <div className={cls.bannerContainer}>
                    <img className={cls.banner} src={images.banner} alt="main-banner" />
                </div>
            </div>
        </div>
    );
};
