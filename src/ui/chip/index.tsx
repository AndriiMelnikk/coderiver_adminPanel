import React, { FC } from 'react';


import style from "./chip.module.scss"

interface Props {
    background: BackgroundChip;
    text: string;
    border?: 'borderBig' | 'borderSmall'
}
export enum BackgroundChip {
    red = 'red',
    yellow = 'yellow',
    green = 'green',
    default = 'default',
}

const Chip: FC<Props> = ({background, text, border='borderBig'}) =>  {

    return (
        <span className={[style.chip, style[background], style[border]].join(' ')}>
            {text}
        </span>
    );
}

export default Chip;

