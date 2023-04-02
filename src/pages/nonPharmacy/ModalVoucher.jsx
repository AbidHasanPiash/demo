import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {RiCloseFill} from 'react-icons/ri'

export default function ModalVoucher({isOpen,onClose}) {
    useEffect(() => {
        function handleKeyDown(event) {
        if (event.key === "Escape") {
            onClose();
        }
        }

        if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
        document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);
    const selectType = [
        {key:'select a type', value:''},
        {key:'type1', value:'type1'},
        {key:'type2', value:'type2'},
        {key:'type3', value:'type3'},
    ]
    const selectMonth = [
        {key:'select a Month', value:''},
        {key:'month1', value:'month1'},
        {key:'month2', value:'month2'},
        {key:'month3', value:'month3'},
    ]
    const initialValues = { 
        selecttype: '', 
        voucherdate: '', 
        vouchernumber: '', 
        selectmonth: '', 
        totalvalue: '', 
        isshow: false ,
        title: '', 
        head: '', 
        dr:{
            gl: '', 
            subgl: '', 
            discription: '',
            amount: '', 
            order: '', 
        }, 
    };
    const validationSchema = Yup.object({
        selecttype : Yup.string().required('required !'),
        voucherdate : Yup.string().required('required !'),
        vouchernumber : Yup.string().required('required !'),
        selectmonth : Yup.string().required('required !'),
        totalvalue : Yup.string().required('required !'),
        title : Yup.string().required('required !'),
        head : Yup.string().required('required !'),
        dr : Yup.object({
            gl : Yup.string().required('Required'),
            subgl : Yup.string().required('Required'),
            discription : Yup.string().required('Required'),
            amount : Yup.string().required('Required'),
            order : Yup.string().required('Required'),
        }),
    });
    const onSubmit = (values) => {
        setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        }, 400);
    };
    const textField = `flex items-center justify-between px-10 space-x-2 mb-6`;
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
          <h1>Voucher</h1>
          <button onClick={onClose}><RiCloseFill/></button>
        </div>
        <div className='flex w-full h-full py-10 items-center justify-center'>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className='flex flex-col items-end justify-end'>
                <div className='grid grid-cols-4 items-end justify-end'>
                    <div className={`${textField} col-span-4`}>
                        <label htmlFor="selecttype">Type of Voucher:</label>
                        <div className='relative w-2/3'>
                            <Field as="select" id="selecttype" name="selecttype" className="w-full">
                                {selectType.map(option=>{
                                    return( <option key={option.value} value={option.value}> {option.key}</option>
                                    )
                                })}
                            </Field>
                            <span className={errorField}><ErrorMessage name="selecttype"/></span>
                        </div>
                    </div>
                    <div className={`${textField} col-span-2`}>
                        <label htmlFor="voucherdate">Voucher Date:</label>
                        <div className='relative'>
                            <Field type="date" id="voucherdate" name="voucherdate" className="w-52"/>
                            <span className={errorField}><ErrorMessage name="voucherdate"/></span>
                        </div>
                    </div>
                    <div className={`${textField} col-span-2`}>
                        <label htmlFor="vouchernumber">Voucher Number:</label>
                        <div className='relative'>
                            <Field type="text" id="vouchernumber" name="vouchernumber" className="w-52"/>
                            <span className={errorField}><ErrorMessage name="vouchernumber"/></span>
                        </div>
                    </div>
                    <div className={`${textField} col-span-2`}>
                        <label htmlFor="selectmonth">Month:</label>
                        <div className='relative'>
                            <Field as="select" id="selectmonth" name="selectmonth" className="w-52">
                                {selectMonth.map(option=>{
                                    return( <option key={option.value} value={option.value}> {option.key}</option>
                                    )
                                })}
                            </Field>
                            <span className={errorField}><ErrorMessage name="selectmonth"/></span>
                        </div>
                    </div>
                    <div className={`${textField} col-span-2`}>
                        <label htmlFor="totalvalue">Total Value:</label>
                        <div className='relative'>
                            <Field type="text" id="totalvalue" name="totalvalue" className="w-52"/>
                            <span className={errorField}><ErrorMessage name="totalvalue"/></span>
                        </div>
                    </div>
                    <div className={`${textField} col-span-2`}>
                        <label htmlFor="isshow">is Audit Mode Show?</label>
                        <Field type="checkbox" id="isshow" name="isshow" className={checkField}/>
                    </div>
                    <div className={`${textField} col-span-4`}>
                        <label htmlFor="title">Title:</label>
                        <div className='relative w-2/3'>
                            <Field type="text" id="title" name="title" className="w-full"/>
                            <span className={errorField}><ErrorMessage name="title"/></span>
                        </div>
                    </div>
                    <div className={`${textField} col-span-4`}>
                        <label htmlFor="head">Head:</label>
                        <div className='relative w-2/3'>
                            <Field type="text" id="head" name="head" className="w-full"/>
                            <span className={errorField}><ErrorMessage name="head"/></span>
                        </div>
                    </div>
                    <div className='col-span-4 flex items-center justify-center mb-2 border-b border-black'>
                        DR
                    </div>
                    <div className='col-span-4 flex items-center justify-center space-x-2'>
                        <div>
                            <label htmlFor="drgl">GL:</label>
                            <div className='relative'>
                                <Field type="text" id="drgl" name="dr.gl"/>
                                <span className={errorField}><ErrorMessage name="dr.gl"/></span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="drsubgl">Sub GL:</label>
                            <div className='relative'>
                                <Field type="text" id="drsubgl" name="dr.subgl"/>
                                <span className={errorField}><ErrorMessage name="dr.subgl"/></span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="drdiscription">Discription:</label>
                            <div className='relative'>
                                <Field type="text" id="drdiscription" name="dr.discription"/>
                                <span className={errorField}><ErrorMessage name="dr.discription"/></span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="dramount">Amount:</label>
                            <div className='relative'>
                                <Field type="text" id="dramount" name="dr.amount" className="w-24"/>
                                <span className={errorField}><ErrorMessage name="dr.amount"/></span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="drorder">Order:</label>
                            <div className='relative'>
                                <Field type="text" id="drorder" name="dr.order" className="w-24"/>
                                <span className={errorField}><ErrorMessage name="dr.order"/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='border mt-5 mr-10 px-3 py-1 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-md' type="submit">Save</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}