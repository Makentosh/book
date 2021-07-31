import React from 'react';
import {useForm} from 'react-hook-form';
import Button from '../Button';
import {EMAIL_PATTER_VALIDATION, VALIDATION_MESSAGES} from '../Tools';
import {useDispatch} from 'react-redux';
import {openModalSuccess} from '../../actions/modalActions';

interface FormData {
    email: string;
}

const NewsLetterForm = ({...props}) => {
    const dispatch = useDispatch();

    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit((data) => {
        console.log(data, 'data');
        dispatch(openModalSuccess())
        reset();
    });


    return (
        <form action="#">
            <div className="form">
                <div className="form__control">
                    <div className="form__part">
                        <input type="text"
                               {...register('email', {
                                   required: VALIDATION_MESSAGES.email.required,
                                   pattern: {
                                       value: EMAIL_PATTER_VALIDATION,
                                       message: VALIDATION_MESSAGES.email.pattern
                                   }
                               })}
                               name="email"
                               className={`form__input ${errors.email ? 'form__input--invalid' : ''}`}
                               placeholder="Enter your email"/>
                        {errors.email && <div className="error">{errors.email.message}</div>}
                    </div>
                    <div className="form__part">
                        <Button className="subscribe__btn"
                                onClick={onSubmit}
                                title="Subscribe"/>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default NewsLetterForm
