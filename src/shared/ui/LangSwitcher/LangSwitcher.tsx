import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import { images } from '../../assets/icons/images';
import cls from './LangSwitcher.module.scss';

export const LangSwitcher = memo(() => {
    const { i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'wo' : 'en');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            <img src={images.BtnLoadNewChars} alt="load-new-char" className={cls.langBtn} />
        </Button>
    );
});
