import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'src/shared/ui/AppLink/AppLink';
import { useLocation } from 'react-router-dom';
import { navItems } from '../../model/navItem';
import cls from './Nav.module.scss';

export const Nav: FC = () => {
    const [selectItem, setSelectItem] = useState<string>('/');
    const location = useLocation();

    useEffect(() => {
        setSelectItem(location.pathname);
    }, [location.pathname]);

    const { t } = useTranslation();
    return (
        <nav className={cls.navLink}>
            {navItems.map((link) => (
                <AppLink
                    key={link.id}
                    to={link.path}
                    onClick={() => setSelectItem(link.path)}
                >
                    <div>{ t(`${link.title}`) }</div>
                    <div className={link.path === selectItem
                        ? cls.selectLine
                        : cls.unSelectLine}
                    />
                </AppLink>
            ))}
        </nav>
    );
};
