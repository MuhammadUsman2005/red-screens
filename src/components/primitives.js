import React, { forwardRef } from 'react';

export const View = forwardRef(({ className, style, children, onClick, ...props }, ref) => (
  <div ref={ref} className={className} style={style} onClick={onClick} {...props}>
    {children}
  </div>
));
View.displayName = 'View';

export const Text = forwardRef(({ className, style, children, onClick, ...props }, ref) => (
  <span ref={ref} className={className} style={style} onClick={onClick} {...props}>
    {children}
  </span>
));
Text.displayName = 'Text';

export const Image = forwardRef(({ source, src, alt, className, style, ...props }, ref) => (
  <img ref={ref} src={source || src} alt={alt || ''} className={className} style={style} {...props} />
));
Image.displayName = 'Image';

export const ScrollView = forwardRef(({ className, style, children, ...props }, ref) => (
  <div ref={ref} className={`overflow-y-auto ${className || ''}`} style={style} {...props}>
    {children}
  </div>
));
ScrollView.displayName = 'ScrollView';

export const TouchableOpacity = forwardRef(({ className, style, children, onPress, onClick, ...props }, ref) => (
  <button ref={ref} className={className} style={style} onClick={onPress || onClick} type="button" {...props}>
    {children}
  </button>
));
TouchableOpacity.displayName = 'TouchableOpacity';

export const TextInput = forwardRef(({ className, style, value, onChangeText, onChange, placeholder, onSubmitEditing, ...props }, ref) => (
  <input
    ref={ref}
    className={className}
    style={style}
    value={value}
    onChange={(e) => {
      if (onChangeText) onChangeText(e.target.value);
      if (onChange) onChange(e);
    }}
    onKeyDown={(e) => {
      if (e.key === 'Enter' && onSubmitEditing) onSubmitEditing();
    }}
    placeholder={placeholder}
    {...props}
  />
));
TextInput.displayName = 'TextInput';

export const SafeAreaView = forwardRef(({ className, style, children, ...props }, ref) => (
  <div ref={ref} className={className} style={style} {...props}>
    {children}
  </div>
));
SafeAreaView.displayName = 'SafeAreaView';

export const FlatList = ({ data, renderItem, keyExtractor, className, style, ...props }) => (
  <div className={className} style={style} {...props}>
    {data && data.map((item, index) => (
      <React.Fragment key={keyExtractor ? keyExtractor(item, index) : index}>
        {renderItem({ item, index })}
      </React.Fragment>
    ))}
  </div>
);
