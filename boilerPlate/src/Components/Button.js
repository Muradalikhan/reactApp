
import React from 'react';

export default function Button({className,onClick,title}) {
  return <div>

      <button className={className} onClick={onClick}>{title}</button>
  </div>;
}
