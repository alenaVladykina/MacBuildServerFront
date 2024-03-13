import React, {ChangeEvent, useState} from 'react';
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";
import {Button} from "../button/Button";
import Input from "../input/Input";
import './auth.scss'
import {useAppDispatch} from "../../app/store";
import {UserRegistrationType} from "../../commons/types";
import {registrationTC} from "../../app/appReduser";
import {PayloadMessage} from "../PayloadMessage";
import {GlobalError} from "../GlobalError";


const SignUp = () => {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState<boolean>(false);

  const onShow = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },

    validate: values => {
      const error: UserRegistrationType = {} as UserRegistrationType

      if (!values.email) {
        error.email = 'Required';
      } else if (!values.password) {
        error.password = 'Required';
      }

      if (values.password.length > 20) {
        error.password = 'Must be at least 20 characters.';
      } else if (values.password.length < 3) {
        error.password = 'Must be at least 3 characters.';
      }

      if (!values.confirmPassword) {
        error.confirmPassword = 'Required';
      } else if (values.password !== values.confirmPassword) {
        error.confirmPassword = 'Invalid confirm';
      }

      return error;
    },

    onSubmit: (values: UserRegistrationType) => {
      dispatch(registrationTC(values))
    },
  });

  return (
    <section className='auth'>
      {/*<PayloadMessage/>*/}
      {/*<GlobalError/>*/}
      <h2 className='auth_title'>Sign Up</h2>
      <form onSubmit={formik.handleSubmit} className='form'>
        <Input
          type='text'
          placeholder='Email'
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
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password ?
          <div className='error'>{formik.errors.password}</div> : null}
        <Input
          type={checked ? 'text' : 'password'}
          name='confirmPassword'
          placeholder='Confirm Password'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword ?
          <div className='error'>{formik.errors.confirmPassword}</div> : null}
        <div className='checkbox'>
          <input type="checkbox"
                 onChange={onShow}
                 id="show" name="show"
                 className='checkbox_input'/>
          <label htmlFor="show">Show Password</label>
        </div>
        <Button type='submit' title='Submit'/>
        <NavLink to='/auth' className='signUp'>Sign In</NavLink>
      </form>
    </section>
  );
}

export default SignUp;