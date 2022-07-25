import React, { FC, useMemo } from 'react';
import { BlockNumber } from '../../ts/users';

import style from './numberBlocks.module.scss';

interface Props{
    infoBlock: BlockNumber[],
}

const BlockNumbers: FC<Props> = ({infoBlock}) => {

    const hash = useMemo(() => {
        return infoBlock.map((e, index)=>{
            return(
            <div className={style.blockNumber} key={index}>
                <h5>{e.name}</h5>
                <h3>{e.number}</h3>
            </div>)
        })
    }, [infoBlock]);

    return(
    <div className={style.containerBlockNumber}>
        {hash}
    </div>)
}

export default React.memo(BlockNumbers);