import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";
import { useContext } from "react";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    try {
      const { data } = await axios.put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": process.env.NEXT_PUBLIC_PRIVATE_KEY } }
      );
      router.push("/chat");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Login</div>

          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
