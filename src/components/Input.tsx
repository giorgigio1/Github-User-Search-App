import React from 'react';

type Props = {
  type: string;
  placeholder: string;
  style?: React.CSSProperties;
  id?: string;
  onChange?: any;
  value?: string;
};

export const Input: React.FC<Props> = ({ type, placeholder, style, id, onChange }) => {
  return <input type={type} placeholder={placeholder} style={style} id={id} onChange={onChange} />;
};