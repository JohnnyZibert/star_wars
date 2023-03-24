import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/Button/Button';
import { AppLink } from 'src/shared/ui/AppLink/AppLink';
import cls from './MainContent.module.scss';

export const MainContent = () => {
    const { t } = useTranslation('translation');
    return (
        <div className={cls.MainContent}>
            <h1 className={cls.title}>
                {t('titleHome')}
            </h1>
            <h2 className={cls.subTitle}>{t('You can find out all the information about your favorite characters')}</h2>
            <AppLink to="/characters">
                <Button className={cls.moreDetailsBtn}>
                    {t('See more...')}
                </Button>
            </AppLink>
        </div>
    );
};
