import Button from "../components/Button";
import { useState, useEffect } from "react";
import { usePostLoginMutation } from "../store";
import useModalWindowContext from "../hooks/useModalWindowContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendLogin, sendLoginResult] = usePostLoginMutation();

  //modal window context is being used to save jwtokens and error data.
  const { jwToken, setjwToken, setShowError } = useModalWindowContext();

  useEffect(() => {
    if (!sendLoginResult.isLoading && sendLoginResult.data) {
      setjwToken(sendLoginResult.data);
    }

    if (sendLoginResult.error) {
      setShowError(sendLoginResult.error.data);
    }
  }, [
    sendLoginResult.error,
    sendLoginResult.data,
    sendLoginResult.isLoading,
    setjwToken,
    setShowError,
  ]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    sendLogin({ email, password });
  };

  const contentPre = (
    <form className="w-32 lg:w-1/3 m-auto flex flex-col">
      <label className="  mb-1">Email</label>
      <input
        className="  mb-3 rounded-md border-2 border-primary-container focus:border-primary focus:outline-none"
        type="text"
        onChange={handleEmailChange}
        value={email}
      ></input>
      <label className="  mb-1">Password</label>
      <input
        className="  mb-3 rounded-md border-2 border-primary-container focus:border-primary focus:outline-none"
        type="text"
        onChange={handlePasswordChange}
        value={password}
      ></input>
      <Button
        className="w-16 md:w-24 m-auto"
        onClick={handleLoginFormSubmit}
        primary
        rounded
        loading={sendLoginResult.isLoading}
      >
        Submit
      </Button>
    </form>
  );

  let contentPost;
  if (sendLoginResult.data || sendLoginResult.error) {
    const userId = sendLoginResult.data ? sendLoginResult.data.user : null;
    const errorMsg = sendLoginResult.error
      ? sendLoginResult.error.data.message
      : null;
    contentPost = <div>{userId || errorMsg}</div>;
  }

  return (
    <div>{!jwToken && !sendLoginResult.error ? contentPre : contentPost}</div>
  );
}

export default LoginForm;
