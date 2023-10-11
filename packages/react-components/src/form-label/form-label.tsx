import React, { FunctionComponent, ReactElement } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { styled } from '../stitches.config';
import { Flex } from '../flex';
import { Text } from '../text';

export type FormLabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  as?: React.ElementType;
  requiredIndicator?: ReactElement | boolean;
};

const StyledFormLabel = styled(LabelPrimitive.Root, {
  display: 'block',
  color: '$neutral800',
  fontWeight: '$4',
  userSelect: 'none',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs'
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

export const FormLabel: FunctionComponent<FormLabelProps> = ({
  children,
  requiredIndicator = false,
  as
}: FormLabelProps) => {
  return (
    <Flex gap="$1">
      <StyledFormLabel as={as}>{children}</StyledFormLabel>
      {requiredIndicator === true ? <Text css={{ color: 'red', paddingTop: '$1' }}>*</Text> : null}
      {typeof requiredIndicator !== 'boolean'
        ? React.cloneElement(requiredIndicator) : null}
    </Flex>
  );
};
