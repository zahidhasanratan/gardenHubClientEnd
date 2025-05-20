import React, { useState, useContext } from "react";
import { Zoom } from "react-awesome-reveal";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

export const Register = () => {
  const { createUser, signInWithGoogle, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 8 characters and include uppercase, lowercase, and a special character.",
        confirmButtonColor: "#16a34a",
      });
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateProfile(result.user, { displayName: name, photoURL });
      setUser(result.user);

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 1600);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
        confirmButtonColor: "#16a34a",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result.user);

      Swal.fire({
        icon: "success",
        title: "Signed in with Google!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 1600);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
        text: error.message,
        confirmButtonColor: "#16a34a",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <Zoom triggerOnce>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Register for Garden Hub
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {["name", "email", "photoURL", "password"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-green-800 capitalize">
                  {field === "photoURL" ? "Photo URL" : field}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={
                    field === "photoURL"
                      ? "https://your-photo-url.com"
                      : field === "email"
                      ? "you@example.com"
                      : field === "password"
                      ? "••••••••"
                      : "John Doe"
                  }
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-3">
            <hr className="w-16 border-green-300" />
            <span className="text-green-600 font-semibold">OR</span>
            <hr className="w-16 border-green-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="mt-6 w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-2xl mr-3" />
            Continue with Google
          </button>
        </div>
      </Zoom>
    </section>
  );
};
