import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from 'src/shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

export const ErrorPage = memo(() => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cls.ErrorPage}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
