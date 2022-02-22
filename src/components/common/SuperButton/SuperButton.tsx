import React from 'react'
import s from './SuperButton.module.css'
import { SuperButtonPropsType } from './types'

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, disabled,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className} ${disabled ? s.disabled : ''}`
    const onClickCallback = () => {

    }

    return (
        <button
            className={finalClassName}
            onClick={onClickCallback}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
