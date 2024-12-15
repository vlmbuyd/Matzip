import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
}

const deviceHeight = Dimensions.get('screen').height;

export default function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={[styles.contianer, styles[variant], styles[size]]}
      {...props}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contianer: {
    borderRadius: 3,
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: '#c63b64',
  },
  outlined: {
    borderColor: '#c63b64',
    borderWidth: 1,
  },

  large: {
    width: '100%',
    paddingVertical: deviceHeight > 900 ? 15 : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    fontWeight: '700',
  },

  filledText: {
    color: 'white',
  },
  outlinedText: {
    color: '#c63b64',
  },
});
