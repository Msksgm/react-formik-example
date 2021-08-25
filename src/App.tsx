import { FC } from "react";
import "./App.css";

import UseFormikSignupFormNoYup from "./components/UseFormikNoYup";
import UseFormikSignupFormWithYup from "./components/UseFormikWithYup";
import FormikWithYup from "./components/FormikWithYup";

const App: FC = () => {
  return (
    <>
      <body>
        <div className="form-block">
          <h2>useFormik Yup なし</h2>
          <UseFormikSignupFormNoYup />
        </div>

        <div className="form-block">
          <h2>useFormik Yup あり</h2>
          <UseFormikSignupFormWithYup />
        </div>

        <div className="form-block">
          <h2>Formik Yup あり</h2>
          <FormikWithYup />
        </div>
      </body>
    </>
  );
};

export default App;
