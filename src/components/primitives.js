import React from 'react';

export const View = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const Text = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);

export const Image = ({ source, src, ...props }) => (
  <img src={source || src} {...props} />
);

export const TouchableOpacity = ({ onPress, onClick, children, ...props }) => (
  <div onClick={onPress || onClick} {...props}>{children}</div>
);

export const ScrollView = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const TextInput = ({ onChangeText, onChange, ...props }) => (
  <input
    onChange={onChangeText ? (e) => onChangeText(e.target.value) : onChange}
    {...props}
  />
);
