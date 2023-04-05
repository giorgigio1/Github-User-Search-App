import React from 'react';

type Props = {
  type: string;
  placeholder: string;
  style?: React.CSSProperties;
  id?: string;
};

export const Input: React.FC<Props> = ({ type, placeholder, style, id }) => {
  return <input type={type} placeholder={placeholder} style={style} id={id} />;
};