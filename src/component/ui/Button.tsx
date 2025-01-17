import React from "react";
import './styles.css'

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  redirect: string;
}

const Button: React.FC<Props> = ({children, onClick,redirect}) => {  
  const handleClick = () => {
    window.location.href = redirect; // Redirect to the provided URL
  };
  return <button onClick={handleClick}> {children} </button>;
  
};

export default Button;
