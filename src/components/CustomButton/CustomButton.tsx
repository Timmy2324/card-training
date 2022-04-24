import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './CustomButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const CustomButton: React.FC<CustomButtonPropsType> = (props) => {

    const {
        red,
        className,
        ...restProps
    } = props;

    const finalClassName = `${s.btn} ${red ? s.red : s.default} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
};

export default CustomButton;