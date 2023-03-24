import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { images } from 'src/shared/assets/icons/images';
import cls from './Header.module.scss';
import { Nav } from '../Navigation/Nav';

export const Header = memo(() => {
    const location = useLocation();
    const path = location.pathname === '/' || location.pathname === '/characters';
    return (
        <>
            { path ? (
                <div className={cls.Navbar}>
                    <div className={cls.container}>
                        <img src={images.logo} className={cls.logoIcon} alt="logoIMG" />
                        <Nav />
                    </div>
                </div>
            ) : null}

        </>
    );
});
