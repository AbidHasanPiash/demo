import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {RiCloseFill} from 'react-icons/ri'

export default function ModalFiscalMonth({onClose}) {
  const selectYear = [
      {key:'select a year', value:''},
      {key:'year1', value:'year1'},
      {key:'year2', value:'year2'},
      {key:'year3', value:'year3'},
  ]
  const initialValues = { 
    selectyear: '', 
    monthname: '', 
    monthcode: '', 
    startdate: '', 
    enddate: '', 
    openingdate: '', 
    closingdate: '', 
    reopeningdate: '', 
    reclosingdate: '', 
    isopen: false ,
  };
  const validate = (values) => {
    const errors = {};
    if (!values.selectyear) {
      errors.selectyear = 'Required';
    }
    if (!values.monthname) {
      errors.monthname = 'Required';
    }
    if (!values.monthcode) {
      errors.monthcode = 'Required';
    }
    if (!values.startdate) {
      errors.startdate = 'Required';
    }
    if (!values.enddate) {
      errors.enddate = 'Required';
    }
    if (!values.openingdate) {
      errors.openingdate = 'Required';
    }
    if (!values.closingdate) {
      errors.closingdate = 'Required';
    }
    if (!values.reopeningdate) {
      errors.reopeningdate = 'Required';
    }
    if (!values.reclosingdate) {
      errors.reclosingdate = 'Required';
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
          <h1>Fiscal Month</h1>
          <button onClick={onClose}><RiCloseFill/></button>
        </div>
        <div className='flex w-full h-full p-10 items-center justify-center'>
          <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form className='flex flex-col items-end justify-end'>
                <div className={textField}>
                    <label htmlFor="selectyear">Year:</label>
                    <div className='relative'>
                        <Field as="select" id="selectyear" name="selectyear" className="w-52">
                            {selectYear.map(option=>{
                                return( <option key={option.value} value={option.value}> {option.key}</option>
                                )
                            })}
                        </Field>
                        <span className={errorField}><ErrorMessage name="selectyear"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="monthname">Month Name:</label>
                    <div className='relative'>
                        <Field type="text" id="monthname" name="monthname" className="w-52"/>
                        <span className={errorField}><ErrorMessage name="monthname"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="monthcode">Month Code:</label>
                    <div className='relative'>
                        <Field type="text" id="monthcode" name="monthcode" className="w-52"/>
                        <span className={errorField}><ErrorMessage name="monthcode"/></span>
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
                    <label htmlFor="openingdate">Opening Date:</label>
                    <div className='relative'>
                        <Field type="date" id="openingdate" name="openingdate" className="w-52"/>
                        <span className={errorField}><ErrorMessage name="openingdate"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="closingdate">Closing Date:</label>
                    <div className='relative'>
                        <Field type="date" id="closingdate" name="closingdate" className="w-52"/>
                        <span className={errorField}><ErrorMessage name="closingdate"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="reopeningdate">Re Opening Date:</label>
                    <div className='relative'>
                        <Field type="date" id="reopeningdate" name="reopeningdate" className="w-52"/>
                        <span className={errorField}><ErrorMessage name="reopeningdate"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="reclosingdate">Re Closing Date:</label>
                    <div className='relative'>
                        <Field type="date" id="reclosingdate" name="reclosingdate" className="w-52"/>
                        <span className={errorField}><ErrorMessage name="reclosingdate"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="isopen">Is Open</label>
                    <Field type="checkbox" id="isopen" name="isopen" className={checkField}/>
                </div>
                <button className='border px-3 py-1 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-md' type="submit">Save</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}