import React, { useState } from 'react';
import { Icon } from 'antd';
import FlipInx from '../../useful/animations/FlipInx';
import {
    CardStyled,
    IconPosition,
    QtdEmail,
    TextPosition,
    Hposition
} from './CardsStyle'


const Card = props => {
    let coluns = '';
    let positionStart = '';
    let positionEnd = '';
    let textPositionStart = '';

    const [dadosMail, setDadosMail] = useState(props);

    if (dadosMail.value > 999) {
        coluns = '33.3% 33.3% 33.3%';
        positionStart = '2';
        positionEnd = '5';
        textPositionStart = '3';
    } else if (dadosMail.card.value > 99) {
        coluns = '20% 20% 20% 20% 20%';
        positionStart = '4';
        positionEnd = '5';
        textPositionStart = '5';
    } else {
        coluns = '33.3% 33.3% 33.3%';
        positionStart = '3';
        positionEnd = '4';
        textPositionStart = '3';
    }

    useEffect(() => {
        setDadosMail(props);
    }, [props]);

    return (
        <div style={{ display: 'inline' }}>
            <FlipInx key={dadosMail.value}>
                <CardStyled color={dadosMail.color} coluns={coluns}>
                    <Hposition>{dadosMail.header}</Hposition>
                    <IconPosition>
                        {dadosMail.type ? (
                            <Icon type={dadosMail.type} />
                        ) : (
                                <i className={dadosMail.iconClass} />
                            )}
                    </IconPosition>
                    <QtdEmail start={positionStart} end={positionEnd}>
                        <div style={{ fontSize: '40px' }}>{dadosMail.value}</div>
                    </QtdEmail>
                    <TextPosition textPositionStart={textPositionStart}>
                        Emails
            </TextPosition>
                </CardStyled>
            </FlipInx>
        </div>
    );
};

export default Card;