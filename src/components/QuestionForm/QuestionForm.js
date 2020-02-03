import React from "react";
import useForm from "react-hook-form";
import "./QuestionForm.scss"

export default function QuestionForm() {
  let submitMsg = React.createRef();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = ()=> {
      submitMsg.current.style.height = 'auto';
      submitMsg.current.style.visibility = 'visible';
  };
  return (
    <div className="questionForm">
      <h1 className="questionForm_title">Contact Us</h1>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="inputLabel">email</label>
        <input
        name="email"
        className="emailInput"
        ref={register({
        required: 'Required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "invalid email address"
        }
        })}
        />
        {errors.email && errors.email.message}
        <label htmlFor="message" className="inputLabel">message</label>
        <textarea
        name="message"
        className="messageInput"
        ref={register({
        validate: value => value !== "admin" || "Nice try!"
        })}
        />
          {errors.username && errors.username.message}
          <div className="button-center"><button className="questionForm_btn" type="submit" >Submit</button></div>
      </form>
      <center>
        <div ref={submitMsg} className="submitMsg"> 
          <h2 className="submitMsg_title">Your message has been successfully sent!</h2>
          <h3 className="submitMsg_subtitle">We will answer you within 24h</h3>
        </div>
      </center>
    </div>
  );
}


