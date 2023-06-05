import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const RedirectToAbout = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/about");
  });

  return null;
};

export default RedirectToAbout;
