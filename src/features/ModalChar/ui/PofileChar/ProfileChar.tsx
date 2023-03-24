import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { useSelector } from 'react-redux';
import { images } from 'src/shared/assets/icons/images';
import { getCurrentCharsSelector } from 'src/entities/Profile/model/selectors/currentChar/currentChar';
import { Gender } from 'src/shared/ui/GenderAndBirthYear/Gender';
import { BodyParam } from 'src/shared/ui/BodyParam/BodyParam';
import { PageLoader } from 'src/shared/ui/PageLoader/PageLoader';
import cls from './ProfileChar.module.scss';
import { IsLoadingDataChars } from '../../model/selectors/isLoadingCharsDataSelector/isLoadingDataChars';

const ProfileChar = memo(() => {
    const { t } = useTranslation();

    const {
        skin_color: skin,
        eye_color: eye,
        hair_color: hair,
        height,
        mass,
        name,
        gender,
        birth_year: birthYear,
    } = useSelector(getCurrentCharsSelector);
    const isLoading = useSelector(IsLoadingDataChars);

    return (
        <div className={cls.ProfileChar}>
            {isLoading
                ? <PageLoader />
                : (
                    <>
                        <div className={cls.iconContainer}>
                            {gender && gender === 'male' && <img src={images.male} alt="avatar-Chars" />}
                            {gender && gender === 'female' && <img src={images.female} alt="avatar-Chars" />}
                            {gender && gender === 'n/a' && <img src={images.otherRace} alt="avatar-Chars" />}
                            <div className={cls.genderContainer}>
                                {gender !== 'n/a' && <Gender peopleInfo={gender} className={gender} />}
                                {birthYear && <Gender peopleInfo={birthYear} className="birthYear" />}
                            </div>
                        </div>
                        <div className={cls.charInfo}>
                            <div className={cls.nameChar}>
                                {name}
                            </div>
                            <div className={cls.charInfoBox}>
                                <ul>
                                    <li>
                                        {t(`hair color: ${hair}`)}
                                    </li>
                                    <li>
                                        {t(`skin color: ${skin}`)}
                                    </li>
                                    <li>
                                        {t(`eye color: ${eye}`)}
                                    </li>
                                </ul>
                            </div>
                            <div className={cls.paramContainer}>
                                <div className={cls.params}>
                                    <BodyParam bodyParam={height} paramName="height" />
                                </div>
                                <div className={cls.params}>
                                    <BodyParam bodyParam={mass} paramName="mass" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
});

export default ProfileChar;
