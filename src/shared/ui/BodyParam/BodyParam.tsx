import { memo } from 'react';
import cls from './BodyParam.module.scss';

export interface BodyParamProps {
    bodyParam:string
    paramName:string
}

export const BodyParam = memo((props: BodyParamProps) => {
    const { bodyParam, paramName } = props;
    return (
        <>
            <div className={cls.param}>
                {bodyParam !== 'unknown' ? bodyParam : 0 }
            </div>
            <span>{paramName}</span>
        </>
    );
});
