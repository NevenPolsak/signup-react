import React, { useState } from "react";
import SignupForm from "./components/SignupForm";
import SignupFormSuccess from "./components/SignupFormSuccess";

function App() {
  const [formIsSubmited, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmited ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <SignupFormSuccess />
      )}
    </div>
  );
}

export default App;
