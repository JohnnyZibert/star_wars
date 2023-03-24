import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Gender.module.scss';

interface IProps {
    gender?: string
    className?: string
    peopleInfo?: string

}

export const Gender: FC<IProps> = (props) => {
    const {
        className, gender, peopleInfo,
    } = props;

    const { t } = useTranslation('charactersPage');

    return (
        <div className={cls.genderContainer}>
            {gender !== 'n/a' && (
                <div className={cls[className!]}>
                    {t('peopleInfo', { returnObjects: true, info: `${peopleInfo}` })}
                </div>
            )}
        </div>

    );
};
