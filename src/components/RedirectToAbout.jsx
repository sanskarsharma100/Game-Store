import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToAbout = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo("/about");
  });

  return null;
};

export default RedirectToAbout;
