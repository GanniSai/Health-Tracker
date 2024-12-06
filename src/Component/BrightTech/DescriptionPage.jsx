import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./Security/AuthContext";
import { useEffect, useState } from "react";
import { retriveTodoApi, createTodoApi, updateTodoApi } from "./Todo/TodoService";
import { ErrorMessage, Field, Formik, Form } from "formik";
import './Desc.css';

export default function DescCompo() {
    const { id } = useParams();
    const { username } = useAuth(); // Ensure this returns the correct username
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');
 
    useEffect(() => {
        if (id !== "-1") {
            retriveTodoApi(username, id)
                .then((response) => {
                    setDescription(response.data.description || "");
                    setTargetDate(response.data.targetDate || "");
                })
                .catch((error) => console.log("Error fetching todo:", error));
        }
    }, [id, username]);

    function onsubmit(values) {
        const todo = {
            id: id, // Ensure the ID is included
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false,
        };
    
        if (id === "-1") {
            createTodoApi(username, todo)
                .then(() => navigate(`/TodoPage/${username}`))
                .catch((error) => console.log("Error creating todo:", error));
        } else {
            updateTodoApi(username, id, todo) // Correctly send the updated todo
                .then(() => navigate(`/TodoPage/${username}`))
                .catch((error) => console.log("Error updating todo:", error));
        }
    }
    

    function validate(values) {
        let errors = {};
        if (!values.description || values.description.length < 5) {
            errors.description = "Enter at least 5 characters for Description";
        }
        if (!values.targetDate) {
            errors.targetDate = "Enter a valid Target Date";
        }
        return errors;
    }

    return (
        <div className="container">
            <h1>Patients Records</h1>
            <Formik
                initialValues={{ description, targetDate }}
                enableReinitialize={true}
                onSubmit={onsubmit}
                validate={validate}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {(props) => (
                    <Form>
                        <ErrorMessage name="description" component="div" className="alert alert-warning" />
                        <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                        <fieldset className="form-group">
                            <label>Description</label>
                            <Field type="text" name="description" className="form-control" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Target Date</label>
                            <Field type="date" name="targetDate" className="form-control" />
                        </fieldset>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
