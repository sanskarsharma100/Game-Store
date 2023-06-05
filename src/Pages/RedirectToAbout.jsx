import { useEffect } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const RedirectToAbout = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo("/about");
=======
import { useHistory } from "react-router-dom";

const RedirectToAbout = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/about");
>>>>>>> 9a484bb58ea6817c1889e697d46a199036d336cd
  });

  return null;
};

export default RedirectToAbout;
