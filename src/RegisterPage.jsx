import { Formik, Field, Form } from 'formik';

export default function RegisterPage() {

    // API endpoint that returns all the possible marketing preferences
    // Important: Make sure the ID numbers match the database
    const marketingPreferences = [
        {
            "id": 1,
            "name": "Email Updates"
        },
        {
            "id": 2,
            "name": "SMS promotions"
        },
        {
            "id": 3,
            "name": "WhatsApp"
        }
    ]

    // the initialvalues array is to provide the default values for the form
    const initialValues = {
        "name": "",
        "email": "",
        "password": "",
        "confirmPassword": "",
        "salutation": "Mr",
        "marketingPreferences": []
    }

    // handle submit is called when the user submits the form
    // it takes two arguments
    // argument 1 - the values of the form fields
    // argument 2 - helper object that let us manipulate the form
    const handleSubmit = (values, formikHelpers) => {
        console.log(values)

    }

    return <>
        <div className="container">
            <h1>Register Page</h1>
            <Formik initialValues={(initialValues)} onSubmit={handleSubmit}>
                {
                    (formik) => (
                        <Form>
                            {/* Name */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <Field type="text"
                                    id="name"
                                    className="form-control"
                                    name="name"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <Field type="text"
                                    id="email"
                                    className="form-control"
                                    name="email"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <Field type="password"
                                    id="password"
                                    className="form-control"
                                    name="password"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                                <Field type="password"
                                    id="confirmPassword"
                                    className="form-control"
                                    name="confirmPassword"
                                />
                            </div>

                            {/* Salutation */}
                            <div className="mb-3">
                                <label className="form-label">Salutation</label>
                                <div> {/* Mr/Mrs/Ms */}
                                    <div className="form-check form-check-inline">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            name="salutation"
                                            id="mr"
                                            value="Mr"
                                        />
                                        <label className="form-lable"
                                            htmlFor="mr"
                                        >Mr.</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            name="salutation"
                                            id="mrs"
                                            value="Mrs"
                                        />
                                        <label className="form-lable"
                                            htmlFor="mrs"
                                        >Mrs.</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            name="salutation"
                                            id="ms"
                                            value="Ms"
                                        />
                                        <label className="form-lable"
                                            htmlFor="ms"
                                        >Ms.</label>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Preferences */}
                            <div className="mb-3">
                                <label className="form-label">Marketing Preferences:</label>
                                {
                                    marketingPreferences.map(function (p) {
                                        return (<div className="form-check" key={p.id}>
                                            <Field type="checkbox"
                                                name="marketingPreferences"
                                                value={String(p.id)}
                                                className="form-check-input"
                                                id={`marketing-${p.id}`}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`marketing-${p.id}`}
                                            >{p.name}</label>
                                        </div>)
                                    })
                                }

                            </div>

                             {/* Country */}
                             <div className="mb-3">
                                <label htmlFor="country" className="form-label">
                                    <Field as="select"
                                        className="form-select"
                                        id="country"
                                        name="country"
                                    >
                                        <option value="">Select Country</option>
                                        <option value="sg">Singapore</option>
                                        <option value="my">Malaysia</option>
                                        <option value="in">Indonesia</option>
                                        <option value="th">Thailand</option>
                                    </Field>
                                </label>
                             </div>

                            <button
                                type="submit"
                                className="btn btn-primary mb-3"
                            >Submit</button>
                        </Form>
                    )

                }
            </Formik>
        </div>

    </>
}