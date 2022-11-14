import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const init = {
  first_name: "",
  last_name: "",
  password: "",
  birthday: "",
  email: ""
};

const UsersForm = ({ getUsers, userselected, deselectusers }) => {



  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {

    if (userselected) {
      reset(userselected);
    }
    else {
      reset(init)
    }
  }, [userselected])


  const submit = (data) => {

    if (userselected) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userselected.id}/`, data)
        .then(() => {
          getUsers()
          deselectusers();
        })
        .catch((error) => console.log(error.response?.data));
    } else {
      axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then(() => { getUsers(); })
        .catch(error => console.log(error.response?.data));
    }
  }

  return (
    <div className="usersControl">

      <h3 className="newuser">New User</h3>

      <form className="user-form" onSubmit={handleSubmit(submit)}>

        <div className="data">
          <i class="fa-solid fa-user"></i>
          <div>
            <label htmlFor="first_name" ></label>
            <input className="one1" {...register("first_name")} placeholder="First Name" type="text" id="first_name" />
          </div>

          <div>
            <label htmlFor="last_name" ></label>
            <input className="one1"  {...register("last_name")} placeholder="Last Name" type="text" id="last_name" />
          </div>
        </div>

        <div className="data">
          <i class="fa-solid fa-lock"></i>
          <div>
            <label htmlFor="password" ></label>
            <input  className="one one1" {...register("password")}  placeholder="Password" type="text" id="password" />
          </div>
        </div>

        <div className="data">
          <i class="fa-solid fa-cake-candles"></i>
          <div>
            <label  htmlFor="birthday" ></label>
            <input className="one one1" {...register("birthday")}  type="date" id="birthday" />
          </div>
        </div>

        <div className="data">
          <i class="fa-solid fa-envelope"></i>
          <div >
            <label  htmlFor="email" className="one"></label>
            <input className="one one1" {...register("email")}  placeholder="Email" type="email" id="email" />
          </div>
        </div>

        <button className="buttonFile">upload</button>

      </form>

    </div>
  );
};

export default UsersForm;