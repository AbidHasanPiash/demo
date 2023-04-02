import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {RiCloseFill} from 'react-icons/ri'

export default function ModalFiscalYear({onClose}) {
  const initialValues = { 
    yearname: '', 
    yearcode: '' ,
    startdate: '' ,
    enddate: '' ,
    active: false ,
  };
  const validate = (values) => {
    const errors = {};
    if (!values.yearname) {
      errors.yearname = 'Required';
    }
    if (!values.yearcode) {
      errors.yearcode = 'Required';
    }
    if (!values.startdate) {
      errors.startdate = 'Required';
    }
    if (!values.enddate) {
      errors.enddate = 'Required';
    }
    return errors;
  };
  const onSubmit = (values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  };
  const textField = `flex items-center justify-center space-x-4 mb-6`;
  const errorField = `absolute -bottom-5 left-0 underline text-red-500`;
  const checkField = `relative appearance-none inline-block h-[30px] w-[54px] border-2 border-blue-500
                    cursor-pointer rounded-full bg-slate-300 shadow-xl transition-all
                    after:content-[''] after:absolute after:top-[1px] after:left-[1px]
                    after:h-6 after:w-6 after:rounded-full after:bg-white after:shadow-sm
                    after:transition-all checked:bg-blue-500 checked:after:translate-x-6`
  return (
    <div className='w-full h-full backdrop-blur-sm fixed top-0 inset-x-0 flex items-center justify-center'>
      <div className='w-fit h-fit bg-blue-200 border border-black shadow-xl rounded-md'>
        <div className='flex items-center justify-between px-6 py-2 text-xl'>
          <h1>Fiscal Year</h1>
          <button onClick={onClose}><RiCloseFill/></button>
        </div>
        <div className='flex w-full h-full p-10 items-center justify-center'>
          <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form className='flex flex-col items-end justify-end'>
              <div className={textField}>
                <label htmlFor="yearname">Year Name:</label>
                <div className='relative'>
                  <Field type="text" id="yearname" name="yearname" className="w-52"/>
                  <span className={errorField}><ErrorMessage name="yearname"/></span>
                </div>
              </div>
              <div className={textField}>
                <label htmlFor="yearcode">Year Code:</label>
                <div className='relative'>
                  <Field type="text" id="yearcode" name="yearcode" className="w-52"/>
                  <span className={errorField}><ErrorMessage name="yearcode"/></span>
                </div>
              </div>
              <div className={textField}>
                <label htmlFor="startdate">Start Date:</label>
                <div className='relative'>
                  <Field type="date" id="startdate" name="startdate" className="w-52"/>
                  <span className={errorField}><ErrorMessage name="startdate"/></span>
                </div>
              </div>
              <div className={textField}>
                <label htmlFor="enddate">End Date:</label>
                <div className='relative'>
                  <Field type="date" id="enddate" name="enddate" className="w-52"/>
                  <span className={errorField}><ErrorMessage name="enddate"/></span>
                </div>
              </div>
              <div className={textField}>
                <label htmlFor="active">Active</label>
                <Field type="checkbox" id="active" name="active" className={checkField}/>
              </div>
              <button className='border px-3 py-1 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-md' type="submit">Save</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}
