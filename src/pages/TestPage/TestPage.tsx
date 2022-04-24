import React from 'react';
import s from './TestPage.module.css';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomRange from '../../components/CustomRange/CustomRange';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';

export const TestPage = () => {
    return (
        <div className={s.wrapper}>
            <CustomButton>button</CustomButton>
            <CustomInput placeholder={'input'}/>
            <CustomRange/>
            <CustomCheckbox/>
        </div>
    );
};