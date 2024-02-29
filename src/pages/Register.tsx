import Layout from "../components/Layout";
import { Button, Input, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Register() {
  const resigterSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(6, "Must be exactly 5 digits minimum"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const formikWithMT = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: resigterSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <Layout>
        <div className="flex w-full justify-center">
          <div className="flex flex-col w-96">
            <form
              className="flex flex-col gap-8"
              onSubmit={formikWithMT.handleSubmit}
            >
              <div className="flex flex-col text-black pt-6 gap-6">
                <div className="flex flex-col gap-1">
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    value={formikWithMT.values.name}
                    error={
                      Boolean(formikWithMT.errors.name)
                    }
                    onChange={formikWithMT.handleChange}
                  />
                  {Boolean(formikWithMT.errors.name) ? (
                    <Typography variant="small" className="text-red-500">
                      {formikWithMT.errors.name}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formikWithMT.values.email}
                    error={Boolean(formikWithMT.errors.email)}
                    onChange={formikWithMT.handleChange}
                  />
                  {Boolean(formikWithMT.errors.email) ? (
                    <Typography variant="small" className="text-red-500">
                      {formikWithMT.errors.email}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={formikWithMT.values.password}
                    error={
                      Boolean(formikWithMT.errors.password)
                    }
                    onChange={formikWithMT.handleChange}
                  />
                  {Boolean(formikWithMT.errors.password) ? (
                    <Typography variant="small" className="text-red-500">
                      {formikWithMT.errors.password}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
