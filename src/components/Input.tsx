import React from 'react';

type Props = {
  type: string;
  placeholder: string;
  style?: React.CSSProperties;
};

export const Input: React.FC<Props> = ({ type, placeholder, style }) => {
  return <input type={type} placeholder={placeholder} style={style} />;
};