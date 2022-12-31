import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskFormik = ({ add }) => {

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL,
    } 

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(3, 'Task to short')
                .required('Task is required'),
            description: Yup.string()
                .max(200, 'Username to long'),
        }
    )

    function addTask(values){
        const newTask = new Task(
            values['name'],
            values['description'],
            values['completed'],
            values['level'],
        )
        add(newTask);
    }

    return (
        <div>
            <h4>Create task</h4>
            <Formik
                initialValues = { initialValues }
                validationSchema = { registerSchema } 
                onSubmit={async (values) => {
                    addTask(values)
                }}               
            >

                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="Enter the Task name" type="text" />
                        {
                            errors.name && touched.name && (
                                <ErrorMessage name="name" component="div"></ErrorMessage>
                            )
                        }
                        <label htmlFor='description'>Description</label>
                        <Field id='description' name='description' placeholder='Enter the Task description' type='text' ></Field>
                        {
                            errors.description && touched.description && (
                                <ErrorMessage name='description' component='div'></ErrorMessage>
                            )
                        }
                        <Field id='completed' name='completed' placeholder='Task completed' type='checkbox' ></Field>
                        <label htmlFor='completed'>Task completed</label>
                        <label htmlFor="level">Priority</label>
                        <Field component="select" id="level" name="level" >
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        <button type="submit">Register Account</button>
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default TaskFormik;
