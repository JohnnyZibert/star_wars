import { Button } from 'src/shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { images } from 'src/shared/assets/icons/images';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className={cls.NotFoundPage}>
            <div className={cls.content}>
                <div>
                    404
                </div>
                <img src={images.notFound} alt="not found" className={cls.notFoundImg} />
            </div>
            <Button className={cls.returnBtn} onClick={() => navigate(-1)}>Return</Button>
        </div>
    );
};
