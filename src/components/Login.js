import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLoginRedux } from "../redux/actions/userAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const isLoading = useSelector((state) => state.user.isLoading);
  const account = useSelector((state) => state.user.account);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    //validate
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }

    dispatch(handleLoginRedux(email, password));
  };

  const handleGoback = () => {
    navigate("/");
  };

  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    if (account && account.auth === true) {
      navigate("/");
    }
  }, [account]);

  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Log in</div>
        <div className="text">Email or Username ( eve.holt@reqres.in )</div>
        <input
          type="text"
          placeholder="Email or username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handlePressEnter(event)}
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>
        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={handleLogin}
        >
          {isLoading && <i className="fa-solid fa-circle-notch fa-spin"></i>}
          &nbsp;Login
        </button>
        <div className="back" onClick={() => handleGoback()}>
          &#60;&#60;Go back
        </div>
      </div>
    </>
  );
};

export default Login;
