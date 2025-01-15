import React from "react";
import './styles.css'

interface Props {
  children?: React.ReactNode;
  redirect: 'https://www.rolls-roycemotorcars.com/en_GB/showroom/cullinan.html';
}

const Button: React.FC<Props> = ({
  children,
  redirect
  
}) => {  
  const handleClick = () => {
    window.location.href = redirect; // Redirect to the provided URL
  };
  return (
    <button
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
