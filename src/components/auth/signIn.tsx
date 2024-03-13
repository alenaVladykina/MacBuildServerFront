import React, {ChangeEvent, useEffect, useState} from 'react';
import {useFormik} from "formik";
import Input from "../input/Input";
import {Button} from "../button/Button";
import './auth.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {UserLoginType} from "../../commons/types";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {loginTC} from "../../app/appReduser";
import {getData} from "../../commons/selectors";
import {useSelector} from "react-redux";
import {GlobalError} from "../GlobalError";
import {PayloadMessage} from "../PayloadMessage";


export const SignIn = () => {

  const isLogin = useSelector(getData).isLogin
  const navigate = useNavigate()

  useEffect(() => {
    isLogin && navigate('/')
  }, [isLogin])

  const dispatch = useAppDispatch()
  const [checked, setChecked] = useState<boolean>(false)

  const onShow = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validate: values => {
      const errors: UserLoginType = {} as UserLoginType;

      if (!values.email) {
        errors.email = 'Required';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
      } else if (values.password.length < 3) {
        errors.password = 'Must be at least 3 characters.';
      }

      return errors;
    },

    onSubmit: values => {
      const user = {
        email: values.email,
        password: values.password
      }
      dispatch(loginTC(user))
    },
  });

  return (
    <section className='auth'>
      <h2 className='auth_title'>Sign In</h2>
      <form onSubmit={formik.handleSubmit} className='form'>
        <Input
          type='text'
          placeholder='email'
          value={formik.values.email}
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ?
          <div className='error'>{formik.errors.email}</div> : null}
        <Input
          type={checked ? 'text' : 'password'}
          name='password'
          placeholder='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && <div className='error'>{formik.errors.password}</div>}
        <div className='checkbox'>
          <input type="checkbox"
                 onChange={onShow}
                 id="show" name="show"
                 className='checkbox_input'/>
          <label htmlFor="show">Show Password</label>
        </div>
        <Button type='submit' title='Submit'/>
        <NavLink to='/registration' className='signUp'>Sign Up</NavLink>
      </form>
    </section>
  );
}
