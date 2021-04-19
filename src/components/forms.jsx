import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": "VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM",
      },
      data: data,
      url: "https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/data",
    })
      .then((res) => {
        console.log(res);
        if (res.data.id == 1) {
          axios
            .get({
              url:
                "https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/file",
              method: "get",
              params: { id: res.data.id },
              headers: {
                "x-api-key": "VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM",
              },
            })
            .then((res) => {
              console.log(`aaaaa${res}`);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formMainStyle">
      <h3>Want to get the full version?</h3>
      <h4>Fill in the form below:</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors.name && (
          <span class="alert" role="alert">
            This is required !
          </span>
        )}
        <input
          type="text"
          placeholder="Company name"
          {...register("company_name", { required: true })}
        />
        {errors.company_name && (
          <span class="alert" role="alert">
            This is required !
          </span>
        )}
        <input
          type="text"
          placeholder="Phone"
          {...register("phone", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        {errors.phone && (
          <span class="alert" role="alert">
            This is required !
          </span>
        )}
        <input
          type="text"
          placeholder="Work email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span class="alert" role="alert">
            This is required !
          </span>
        )}
        <input
          type="submit"
          className="buttonStyle"
          value="Download now"
        ></input>
        <input
          style={{ marginLeft: "36px", marginTop: "7px" }}
          type="checkbox"
          {...register("agree", { required: true })}
        />
        <div style={{ width: "80%", float: "right   " }}>
          <label style={{ fontSize: "10px" }}>
            I agree to the privacy policy including for Joonko to use my contact
            details to contact me for marketing purposes.
          </label>
          {errors.agree && (
            <span class="alert" role="alert">
              This is required !
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default Forms;
