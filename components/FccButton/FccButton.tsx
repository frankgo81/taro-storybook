import { Story, Meta } from '@storybook/react';

import React from 'react';
import { Button, ButtonProps, Text } from '@tarojs/components';
import { Children, CSSProperties, PropsWithChildren } from 'react';
import './button.scss';
import PropTypes from 'prop-types';
import { buttonVariants, buttonSizes } from './constants';
import classnames from 'classnames';

interface IFccButtonProps extends ButtonProps {
  text: string;
  variant: string;
  isDisabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  shadow?: string;
  startIcon?: string;
  endIcon?: string;
}

const FccButton = (props: IFccButtonProps) => {
  const { variant, size, onClick, text, isDisabled, backgroundColor, textColor, shadow, startIcon, endIcon } = props;
  const shadows = shadow ? 'shadow' : '';
  const disabled = isDisabled ? 'disabled' : '';

  return (
    <Button
      onClick={onClick}
      className={classnames(
        'button',
        `${size}`,
        `button__${variant}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      )}
      disabled={isDisabled}
      {...props}
    >
      {startIcon && <span className="material-icons icon-start">local_grocery_store</span>}
      <Text className={classnames('text', `text__${variant}`)}>{text}</Text>
      {endIcon && <span className="material-icons icon-end">local_grocery_store</span>}
    </Button>
  );
};

FccButton.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  variant: PropTypes.oneOf([buttonVariants.oval, buttonVariants.rectangular]),
  size: PropTypes.oneOf([buttonSizes.small, buttonSizes.medium, buttonSizes.large]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

FccButton.defaultProps = {
  isDisabled: false,
  type: 'filled',
  variant: 'oval',
  size: 'medium',
  backgroundColor: 'transparent',
  textColor: 'white',
  shadow: true,
};

export { FccButton };
