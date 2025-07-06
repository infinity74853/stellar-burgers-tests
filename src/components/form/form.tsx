import { FC, FormEventHandler, useState } from 'react';
import { IFormProps } from './types';
import styles from './form.module.css';
import clsx from 'clsx';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { namePattern } from '../../utils/constants';

export const Form: FC<IFormProps> = ({ setMode, className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formData.password === formData.repeatPassword) {
      setMode('complete');
    }
  };

  return (
    <form
      className={clsx(styles.form, className)}
      data-testid='form'
      onSubmit={handleSubmit}
    >
      <div className={styles.icon} />
      <div className={styles.text_box}>
        <p className='text text_type_main-large'>Мы нуждаемся в вашей силе!</p>
        <p className={clsx(styles.text, 'text text_type_main-medium')}>
          Зарегистрируйтесь на нашей платформе, чтобы присоединиться к списку
          контрибьюторов
        </p>
      </div>
      <fieldset className={styles.fieldset}>
        <div className='input__container'>
          <div className='input pr-6 pl-6 input_type_text input_size_default'>
            <label className='input__placeholder text noselect text_type_main-default'>
              Имя
            </label>
            <input
              className='text input__textfield text_type_main-default'
              data-testid='name-input'
              name='name'
              onChange={handleChange}
              value={formData.name}
              required
              type='text'
              pattern={namePattern.source}
            />
          </div>
        </div>
        <div className='input__container'>
          <div className='input pr-6 pl-6 input_type_email input_size_default'>
            <label className='input__placeholder text noselect text_type_main-default'>
              E-mail
            </label>
            <input
              className='text input__textfield text_type_main-default'
              data-testid='email-input'
              name='email'
              onChange={handleChange}
              value={formData.email}
              required
              type='email'
            />
          </div>
        </div>
        <div className='input__container'>
          <div className='input pr-6 pl-6 input_type_password input_size_default'>
            <label className='input__placeholder text noselect text_type_main-default'>
              Пароль
            </label>
            <input
              className='text input__textfield text_type_main-default'
              data-testid='password-input'
              name='password'
              onChange={handleChange}
              value={formData.password}
              required
              type='password'
            />
            <div className='input__icon input__icon-action'>
              <svg
                fill='#F2F2F3'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 4C14.0683 4 16.0293 4.71758 17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12ZM12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121ZM12.0012 9.57362C13.3378 9.57362 14.4304 10.6597 14.4304 11.9979C14.4304 13.3264 13.3378 14.4124 12.0012 14.4124C10.6548 14.4124 9.56215 13.3264 9.56215 11.9979C9.56215 11.833 9.58166 11.6779 9.61093 11.5227H9.65971C10.7426 11.5227 11.6207 10.6694 11.6597 9.60272C11.767 9.58332 11.8841 9.57362 12.0012 9.57362Z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='input__container'>
          <div className='input pr-6 pl-6 input_type_password input_size_default'>
            <label className='input__placeholder text noselect text_type_main-default'>
              Повторите пароль
            </label>
            <input
              className='text input__textfield text_type_main-default'
              data-testid='repeat-password-input'
              name='repeatPassword'
              onChange={handleChange}
              value={formData.repeatPassword}
              required
              type='password'
            />
            <div className='input__icon input__icon-action'>
              <svg
                fill='#F2F2F3'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 4C14.0683 4 16.0293 4.71758 17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12ZM12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121ZM12.0012 9.57362C13.3378 9.57362 14.4304 10.6597 14.4304 11.9979C14.4304 13.3264 13.3378 14.4124 12.0012 14.4124C10.6548 14.4124 9.56215 13.3264 9.56215 11.9979C9.56215 11.833 9.58166 11.6779 9.61093 11.5227H9.65971C10.7426 11.5227 11.6207 10.6694 11.6597 9.60272C11.767 9.58332 11.8841 9.57362 12.0012 9.57362Z' />
              </svg>
            </div>
          </div>
        </div>
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.password ||
            formData.password !== formData.repeatPassword
          }
        >
          Зарегистрироваться
        </Button>
      </fieldset>
      <div className={styles.signin_box}>
        <p className='text text_type_main-default text_color_inactive'>
          Уже зарегистрированы?
        </p>
        <Button
          htmlType='button'
          type='secondary'
          size='medium'
          extraClass={styles.signin_btn}
        >
          Войти
        </Button>
      </div>
    </form>
  );
};
