import {useState} from "react";
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";

export const TestPage = () => {
        const [text, setText] = useState<string>('')
        const error = text ? '' : 'error'

        const showText = () => {
            if (error) {
                alert('введите текст...')
            } else {
                alert(text) // если нет ошибки показать текст
            }
        }

        const [checked, setChecked] = useState<boolean>(false)


        return (
            <div>
                <h1>Test Page</h1>
                <hr/>
                <div className={""}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showText}
                        error={error}
                        // className={s.testSpanError}
                        // spanClassName={s.testSpanError}
                    />

                    <SuperInputText
                        // className={s.blue}
                    />

                    <hr/>

                    <SuperButton>
                        default
                    </SuperButton>

                    <SuperButton
                        red
                        onClick={showText}
                    >
                        delete {/*// название кнопки попадёт в children*/}
                    </SuperButton>

                    <SuperButton disabled>
                        disabled
                    </SuperButton>

                    <hr/>

                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                    >
                        some text {/*// этот текст попадёт в children*/}
                    </SuperCheckbox>
                </div>
            </div>
        )
}