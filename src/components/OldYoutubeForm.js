import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log(values);
}

// const validate = values => {
//     let errors = {};

//     if (!values.name) {
//         errors.name = "required"
//     }
//     if (!values.email) {
//         errors.email = "required"
//     }
//     if (!values.channel) {
//         errors.channel = "required"
//     }

//     return errors
// }

const validationSchema = Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string().required('Required!'),
    channel:Yup.string().required('Required!'),
})

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    });

    console.log("visited",formik.touched);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
            </div>
            { formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
            <div className='form-control'>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
            </div>
            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            <div className='form-control'>

                <label htmlFor="channel">YouTube Channel:</label>
                <input type="text" name="channel" id="channel" value={formik.values.channel} onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
            </div>
            {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default OldYoutubeForm