import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: " ",
    email: " ",
    phoneNumber: " ",
    password: " ",
    passwordConfirm: " ",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    alert("here");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="input-field">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="z"
          value={formData.lastName}
          onChange={inputHandler}
        />
        <label htmlFor="lastName">Овог</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          name="firstName"
          placeholder="  "
          value={formData.firstName}
        />
        <label>Нэр үг</label>
      </div>
      <div className="input-field">
        <input
          type="email"
          name="email"
          placeholder="  "
          id="reg-email"
          value={formData.email}
        />
        <label>И-мэйл</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          name="phoneNumber"
          placeholder="  "
          id="reg-phone"
          value={formData.phoneNumber}
        />
        <label>Утасны дугаар</label>
      </div>
      <div className="input-field">
        <input
          type="password"
          name="password"
          placeholder="  "
          id="r_password"
          value={formData.password}
        />
        <label>Нууц үг</label>
      </div>
      <div className="input-field">
        <input
          type="password"
          name="passwordConfirm"
          placeholder="  "
          id="confirm_password"
          value={formData.passwordConfirm}
        />
        <label>Баталгаажуулах Нууц үг</label>
      </div>

      <div className="footer">
        <a href="/login">Нэвтрэх</a>
        <input type="submit" name="register" value="Бүртгүүлэх" />
      </div>
    </form>
  );
}
