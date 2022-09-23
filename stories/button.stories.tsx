import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps, Text } from '@tarojs/components';
import { Children, CSSProperties, PropsWithChildren } from 'react';
import './button.scss';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export const Base = (props: ButtonProps) => {
  // const itemStyle: CSSProperties = {
  //   height: '100px',
  //   textAlign: 'center',
  //   lineHeight: '100px',
  //   color: '#fff',
  // };
  return (
    <Button className='btn'  {...props}>
      <Text className='txt'>{Base.args.children}</Text>
    </Button>
  );
};

Base.args = {
  children: '一键登录确认',
};

export default meta;
