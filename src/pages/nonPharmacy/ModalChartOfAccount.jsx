import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {RiCloseFill} from 'react-icons/ri'

export default function ModalChartOfAccount({onClose}) {
    const selectParentCoA = [
        {key:'select a option', value:''},
        {key:'option1', value:'option1'},
        {key:'option2', value:'option2'},
        {key:'option3', value:'option3'},
    ]
    const selectCoAType = [
        {key:'select a tyoe', value:''},
        {key:'type1', value:'type1'},
        {key:'type2', value:'type2'},
        {key:'type3', value:'type3'},
    ]
  const initialValues = { 
    coaname: '', 
    coacode: '' ,
    selectparentcoa: '',
    selectcoatype: '',
    description: '',
    active: false ,
  };
  const validate = (values) => {
    const errors = {};
    if (!values.coaname) {
      errors.coaname = 'Required';
    }
    if (!values.coacode) {
      errors.coacode = 'Required';
    }
    if (!values.selectparentcoa) {
      errors.selectparentcoa = 'Select one';
    }
    if (!values.selectcoatype) {
      errors.selectcoatype = 'Select one';
    }
    if (!values.description) {
      errors.description = 'Required';
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
          <h1>Chart of Accounts</h1>
          <button onClick={onClose}><RiCloseFill/></button>
        </div>
        <div className='flex w-full h-full p-10 items-center justify-center'>
          <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form className='flex flex-col items-end justify-end'>
                <div className={textField}>
                    <label htmlFor="coaname">AoC Name:</label>
                    <div className='relative'>
                    <Field type="text" id="coaname" name="coaname" className="w-52"/>
                    <span className={errorField}><ErrorMessage name="coaname"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="coacode">AoC Code:</label>
                    <div className='relative'>
                    <Field type="text" id="coacode" name="coacode" className="w-52"/>
                    <span className={errorField}><ErrorMessage name="coacode"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="selectparentcoa">Parent CoA:</label>
                    <div className='relative'>
                    <Field as="select" id="selectparentcoa" name="selectparentcoa" className="w-52">
                        {selectParentCoA.map(option=>{
                            return( <option key={option.value} value={option.value}> {option.key}</option>
                            )
                        })}
                    </Field>
                    <span className={errorField}><ErrorMessage name="selectparentcoa"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="selectcoatype">CoA Type:</label>
                    <div className='relative'>
                    <Field as="select" id="selectcoatype" name="selectcoatype" className="w-52">
                        {selectCoAType.map(option=>{
                            return( <option key={option.value} value={option.value}> {option.key}</option>
                            )
                        })}
                    </Field>
                    <span className={errorField}><ErrorMessage name="selectcoatype"/></span>
                    </div>
                </div>
                <div className={textField}>
                    <label htmlFor="description">Description:</label>
                    <div className='relative'>
                    <Field as="textarea" id="description" name="description" className="w-52"/>
                    <span className={errorField}><ErrorMessage name="description"/></span>
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