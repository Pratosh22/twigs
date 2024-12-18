import React, { FunctionComponent, ReactElement, isValidElement } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { ComponentProps } from '@stitches/react';
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

const StyledText = styled(Text, {
  color: '$negative600',
  paddingTop: '$1'
});

export const FormLabel: FunctionComponent<
  FormLabelProps & ComponentProps<typeof StyledFormLabel>
> = ({
  children, requiredIndicator = false, as, ...rest
}: FormLabelProps) => {
  if (
    !isValidElement(requiredIndicator)
    && typeof requiredIndicator !== 'boolean'
  ) {
    throw Error('requiredIndicator is not a valid component');
  }
  return (
    <Flex gap="$1">
      <StyledFormLabel as={as} {...rest}>
        {children}
      </StyledFormLabel>
      {requiredIndicator === true ? (
        <StyledText data-testid="label-required-indicator">*</StyledText>
      ) : null}
      {typeof requiredIndicator !== 'boolean'
        ? React.cloneElement(requiredIndicator)
        : null}
    </Flex>
  );
};
