import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { create } from "zustand";
import { auth, firestore } from "../firebase/firebase";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signup = async () => {};

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
