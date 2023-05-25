import React from 'react'

interface Props {
  name: string
  className?: string
  onClick?: any
}

const IconComponent = ({name, className, onClick}: Props) => {
  return (
    <i className={`material-icons ${className}`} onClick={onClick}>{name}</i>
  );
}

export default IconComponent;