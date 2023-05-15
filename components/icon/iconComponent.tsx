import React from 'react'

interface Props {
  name: string
  className?: string
}

const IconComponent = ({name, className}: Props) => {
  return (
    <i className={`material-icons ${className}`}>{name}</i>
  );
}

export default IconComponent;