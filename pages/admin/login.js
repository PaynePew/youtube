import { useState } from "react";
import { LoginContainer, LoginWrapper } from "../../views/admin/style";
import { useRouter } from "next/router";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={handleClick}>Sign In</button>
        {error && <span>Wrong Credentials!</span>}
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
