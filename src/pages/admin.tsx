import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";
import { AuthContext } from "../context/AuthContextProvider";
import { isAdmin } from "../helpers/authHelpers";
import Admin from "../components/Admin";

export default function AdminPage() {
  const { loggedInUser } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!loggedInUser) {
      router.push("/");
    } else {
      if (!isAdmin(loggedInUser)) {
        router.push("/dashboard");
        alert("No Authorization.");
      }
    }
  }, [loggedInUser]);

  return !isAdmin(loggedInUser) ? (
    <Loader type="Oval" color="teal" height={30} width={30} timeout={30000} />
  ) : (
    <Admin />
  );
}
