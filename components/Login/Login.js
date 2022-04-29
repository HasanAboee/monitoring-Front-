import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { useNotifications } from "@mantine/notifications";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter()
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const notification = useNotifications();
  function submitHandler(e) {
    // e.preventDefault();
    if (userName == "HasanAboee" && password == "987654") {
      notification.showNotification({
        title: "ورود موفق",
        message: "در حال هدایت به پنل ادمین",
        color: "green",
      });
      router.push('/panel')
    } else {
      notification.showNotification({
        title: "ورود نا موفق",
        message: "نام کاربری یا کلمه عبور اشتباه است",
        color: "red",
      });
    }
  }
  function showPassword() {
    let x = document.getElementById("inputPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.leftside}></div>
        <div className={styles.rightside}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div>
              <label>نام کاربری</label>
              <br />
              <input
                id="inputUseName"
                className={styles.inputUserPass}
                type="text"
                name="userName"
                {...register("userName", { required: "username is required" })}
                onChange={(e) => setUserName(e.target.value)}
              />
              {errors.userName && (
                <div className={styles.errorMessage}>username is required</div>
              )}
            </div>
            <div>
              <label>کلمه عبور</label>
              <br />
              <input
                className={styles.inputUserPass}
                type="password"
                name="password"
                {...register("password", {
                  required: "password is required",
                  
                })}
                id="inputPassword"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className={styles.errorMessage}>Password is required</p>
              )}
              <br />
              <input type="checkbox" onClick={showPassword} />
              <span className={styles.togglePassword}>نمایش کلمه عبور</span>
            </div>
            <button className={styles.submitBtn}>ورود</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
