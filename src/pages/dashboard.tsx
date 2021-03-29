import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContextProvider";
import Loader from "react-loader-spinner";

export default function Dashboard() {
  const { loggedInUser } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!loggedInUser) router.push("/");
  }, [loggedInUser]);

  return !loggedInUser ? (
    <Loader type="Oval" color="teal" height={30} width={30} timeout={30000} />
  ) : (
    <h2>{loggedInUser.username}'s dashboard</h2>
  );
}
