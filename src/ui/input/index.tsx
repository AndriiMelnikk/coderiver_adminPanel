import React, { FC, useState } from 'react';

import style from './input.module.scss';


interface CheckBox_P{
    name:string;
    value?: string;
    text?: string;
    checked?: boolean;
    disabled?: boolean;
}

export const CheckBox: FC<CheckBox_P> = ({name, value, text, checked=false, disabled=false }) =>  {

    const [_checked, _setChecked] =useState(checked)
    const newCheck = ()=>{
        _setChecked(prev=>!prev)
    }

    return (
        <label className={style.checkBox}>
            {text}
            <input type="checkbox" checked={_checked} disabled={disabled}  name={name} value={value} onChange={newCheck} />
            <span className={style.checkmark}></span>
        </label>
    );
}

