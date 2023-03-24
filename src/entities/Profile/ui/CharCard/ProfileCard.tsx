import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gender } from 'src/shared/ui/GenderAndBirthYear/Gender';
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch';
import { BodyParam } from 'src/shared/ui/BodyParam/BodyParam';
import { getCurrenCharRequest } from '../../model/services/getCurrentCharRequest/getCurrenCharRequest';
import cls from './ProfileCard.module.scss';

interface IProps {
    name?: string
    height?: string
    mass?: string
    gender?: string
    onShowModal?: () => void
    birth_year?: string
    url?: string
}

export const ProfileCard = (props:IProps) => {
    const dispatch = useAppDispatch();
    const {
        name,
        height,
        mass,
        gender,
        birth_year: birthYear,
        onShowModal,
        url,
    } = props;
    const { t } = useTranslation('charactersPage');

    const handleClickCard = () => {
        if (onShowModal) {
            onShowModal();
        }
        dispatch(getCurrenCharRequest(url || ''));
    };
    return (
        <div className={cls.ProfileCard} onClick={handleClickCard} data-testid="profile-modal">
            <div className={cls.charInfo}>
                <div className={cls.charName}>{t('charname', { returnObjects: true, name: `${name}` })}</div>
                <div className={cls.bodyInfo}>
                    <div className={cls.paramChar}>
                        <BodyParam bodyParam={height || '0'} paramName={t('height')} />
                    </div>
                    <div className={cls.paramChar}>
                        <BodyParam bodyParam={mass || '0'} paramName={t('mass')} />
                    </div>
                </div>
                <div className={cls.genderAndBirthYear}>
                    {gender !== 'n/a' && <Gender peopleInfo={gender} className={gender} />}
                    {birthYear !== 'unknown' && <Gender peopleInfo={birthYear} className="birthYear" />}
                </div>
            </div>
        </div>
    );
};
