import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { register, error } = useContext(AuthContext);

  const handleRegister = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    register(payload);
  };

  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
          relative
          mx-auto
          max-w-[525px]
          overflow-hidden
          rounded-lg
          bg-white
          py-16
          px-10
          text-center
          sm:px-12
          md:px-[60px]
        "
            >
              <div className="mb-10 text-center md:mb-16">Laraveller</div>
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="
                bordder-[#E9EDF4]
                w-full
                rounded-md
                border
                bg-[#FCFDFE]
                py-3
                px-5
                text-base text-body-color
                placeholder-[#ACB6BE]
                outline-none
                focus:border-primary
                focus-visible:shadow-none
              "
                  />
                  {error.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {error.name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="
                bordder-[#E9EDF4]
                w-full
                rounded-md
                border
                bg-[#FCFDFE]
                py-3
                px-5
                text-base text-body-color
                placeholder-[#ACB6BE]
                outline-none
                focus:border-primary
                focus-visible:shadow-none
              "
                  />
                  {error.email && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {error.email[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="
                bordder-[#E9EDF4]
                w-full
                rounded-md
                border
                bg-[#FCFDFE]
                py-3
                px-5
                text-base text-body-color
                placeholder-[#ACB6BE]
                outline-none
                focus:border-primary
                focus-visible:shadow-none
              "
                  />
                  {error.password && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {error.password[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Password confirmation"
                    className="
                bordder-[#E9EDF4]
                w-full
                rounded-md
                border
                bg-[#FCFDFE]
                py-3
                px-5
                text-base text-body-color
                placeholder-[#ACB6BE]
                outline-none
                focus:border-primary
                focus-visible:shadow-none
              "
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="
                w-full
                px-4
                py-3
                bg-indigo-500
                hover:bg-indigo-700
                rounded-md
                text-white
              "
                  >
                    Register
                  </button>
                </div>
              </form>
              <Link
                to="/forgot-password"
                className="
            mb-2
            inline-block
            text-base text-[#adadad]
            hover:text-primary hover:underline
          "
              >
                Forgot Password?
              </Link>
              <p className="text-base text-[#adadad]">
                Already have an account?
                <Link to="/login" className="text-primary hover:underline">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
