import React, { FC } from 'react';
import c from './container.module.css'

type ContainerProps = {
    display?: 'flex' | 'block' | 'inline-block' | 'grid',
    maxWidth?: `${number}px`;
}

const Container: FC<ContainerProps> = (props) => {
    return (
        <div className={c.container}>
            {props.children}
        </div>
    );
};

export default Container;