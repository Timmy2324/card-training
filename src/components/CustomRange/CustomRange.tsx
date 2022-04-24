import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './CustomRange.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CustomRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
};

const CustomRange: React.FC<CustomRangePropsType> = (props) => {

    const {
        type,
        onChange,
        onChangeRange,
        className,
        ...restProps
    } = props;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeRange && onChangeRange(+e.currentTarget.value);
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`;

    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps}
            />
        </>
    )
};

export default CustomRange;
