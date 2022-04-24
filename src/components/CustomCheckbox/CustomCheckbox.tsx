import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './CustomCheckbox.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CustomCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const CustomCheckbox: React.FC<CustomCheckboxPropsType> = (props) => {

    const {
        type,
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children,
        ...restProps
    } = props;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''} ${s.checkMark}`;

    return (
        <label className={s.label}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
};

export default CustomCheckbox;
