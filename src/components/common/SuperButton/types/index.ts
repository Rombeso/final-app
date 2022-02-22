// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    onClickCallback?: ()=>void
}