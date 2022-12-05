// import { useNavigate} from 'react-router';
import React from 'react'
import Button from './Button';
import './styles.css'

interface Props {
  id: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
  icons: string
}

const Card = ({id, children,header,icons}: Props) =>{ 
  
  // const navigate = useNavigate();

  const onClick = () => {
    // navigate('/');
  };
 

  return (
    <div className="card" id={id}>
       <img className="icon" src={icons} alt="icon"/>
       <h1>{header}</h1>
       <p>{children}</p>
       <Button children="Learn More" onClick={onClick} /> 
    </div>
  )
}

export default Card