import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18n from 'i18next';
import {
    Char,
    countCharsSelector, getCharsDataSelector, getCharsRequest, ProfileCharModal,
} from 'src/features/ModalChar';
import { LangSwitcher } from 'src/shared/ui/LangSwitcher/LangSwitcher';
import { PageLoader } from 'src/shared/ui/PageLoader/PageLoader';
import { ProfileCard } from 'src/entities/Profile';
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch';
import { SelectMenu } from 'src/shared/ui/Select/Select';
import {
    IsLoadingDataChars,
} from 'src/features/ModalChar/model/selectors/isLoadingCharsDataSelector/isLoadingDataChars';
import cls from './CharactersPage.module.scss';

export interface IOption {
    value: string
    label: string
}

const CharactersPage = memo(() => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('charactersPage');
    const [selectedOptions, setSelectedOptions] = useState<IOption>({ value: 'All', label: 'All' });
    const [isProfileModal, setIsProfileModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [fetching, setFetching] = useState<boolean>(true);
    const [fetchTimer, setFetchTimer] = useState<boolean>(false);

    const eyes = ['All', 'brown', 'red', 'blue', 'white'];

    const charsData = useSelector(getCharsDataSelector);
    const totalCount = useSelector(countCharsSelector);
    const isLoading = useSelector(IsLoadingDataChars);

    const pageSize = 9;
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const optionsEyes: IOption[] = eyes.map((color) => ({
        value: color,
        label: color,
    }));

    const onCloseModal = useCallback(() => {
        setIsProfileModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsProfileModal(true);
    }, []);

    useEffect(() => {
        if (!fetchTimer) {
            if (fetching || currentPage < totalPageCount
            ) {
                dispatch(getCharsRequest({
                    currentPage, setCurrentPage, setFetching,
                }));
                setFetchTimer(true);
                setTimeout(() => {
                    setFetchTimer(false);
                }, 1000);
            }
        }
        // eslint-disable-next-line
    }, [dispatch, fetching]);

    const handleOnChange = (option: IOption) => {
        setSelectedOptions({ value: option.value, label: option.label });
    };

    const filterChars = selectedOptions.value === 'All'
        ? charsData
        : charsData.filter((item) => item.eye_color === selectedOptions.value && item);

    const scrollHandler = (): void => {
        if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    };
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.addEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className={cls.profileContainer}>
            {isProfileModal && (
                <ProfileCharModal
                    isOpen={isProfileModal}
                    onClose={onCloseModal}
                />
            )}
            <div className={cls.charsPage}>
                <div className={cls.currentLang}>
                    {t('language')}
                    :
                    {i18n.language}
                </div>

                <h1 className={cls.title}>
                    {`${totalCount} ${t('Peoples for you to choose your favorite')}`}
                </h1>
                <div className={cls.selectContainer}>
                    <p>{t('eye')}</p>
                    <SelectMenu
                        options={optionsEyes}
                        onChange={handleOnChange}
                        label={selectedOptions.label}
                    />
                </div>
                <>
                    {isLoading && !filterChars
                        ? <PageLoader />
                        : (
                            <div className={cls.charsBlock}>
                                {filterChars.map((char: Char) => (
                                    <ProfileCard
                                        key={`${char.birth_year}${char.url}`}
                                        onShowModal={onShowModal}
                                        {...char}
                                    />
                                ))}
                            </div>
                        )}
                </>
                <footer className={cls.footer}>
                    <div className={cls.langSwitcherBtn}>
                        <LangSwitcher />
                    </div>
                </footer>
            </div>
        </div>
    );
});

export default CharactersPage;
