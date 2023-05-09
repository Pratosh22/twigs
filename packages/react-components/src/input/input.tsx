import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import { Box } from '../box';
import { styled } from '../../stitches.config';

const StyledInput = styled('input', {
  width: '100%',
  color: '$neutral900',
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderColor: 'transparent',
  transition: 'all $transitions$2',
  '&::placeholder': {
    color: '$neutral500'
  },
  '&:hover, &:focus, &:active': {
    background: '$white900',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColorOpacity: ['$secondary500', 0.4]
  },
  '&:focus, &:active': {
    $$shadowColor: '$colors$system300',
    outline: 'none',
    background: '$white900',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&:disabled': {
    color: '$neutral700',
    backgroundColorOpacity: ['$neutral500', 0.06],
    cursor: 'not-allowed',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColorOpacity: ['$neutral500', 0.25],
    '&:hover': {
      background: '$white900',
      boxShadow: 'none'
    }
  },
  variants: {
    size: {
      xl: {
        height: '$12',
        borderRadius: '$lg',
        padding: '$6',
        fontSize: '$md'
      },
      lg: {
        height: '$10',
        borderRadius: '$lg',
        padding: '$5 $6',
        fontSize: '$sm'
      },
      md: {
        height: '$8',
        borderRadius: '$md',
        padding: '$3 $4',
        fontSize: '$sm'
      }
    },
    variant: {
      default: {
        background: '$white900',
        borderWidth: '$xs',
        borderStyle: 'solid',
        borderColor: '$neutral200',
        '&:hover, &:focus, &:active': {
          borderWidth: '$xs',
          borderStyle: 'solid',
          borderColor: '$neutral300'
        }
      },
      filled: {
        background: '$black50'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'outlined'
  }
});

function getInputPadding(size: string | ({ '@initial'?: 'md' | 'lg' | 'xl' })) {
  switch (size) {
    case 'lg':
      return '$20';
    case 'md':
      return '$14';
    default:
      return '$22';
  }
}

export interface InputBaseProps {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>) => void
}

export type InputProps = InputBaseProps & ComponentProps<typeof StyledInput> &
  React.HTMLAttributes<HTMLInputElement> & {
    as?: React.ElementType
  };

const IconContainer = styled(Box, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$neutral800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '2',
  pointerEvents: 'none',
  variants: {
    size: {
      xl: {
        width: '$6',
        height: '$6',
        '& svg': {
          width: 18,
          height: 18
        }
      },
      lg: {
        width: '$6',
        height: '$6',
        '& svg': {
          width: 18,
          height: 18
        }
      },
      md: {
        width: '$4',
        height: '$4',
        '& svg': {
          width: '$4',
          height: '$4'
        }
      }
    }
  }
});

export const Input: FunctionComponent<InputProps> = React.forwardRef(({
  size = 'md',
  iconLeft,
  iconRight,
  css,
  ...rest
}: InputProps, ref) => {
  const inputPaddingValue = getInputPadding(size);

  if (iconLeft || iconRight) {
    return (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          ...css
        }}
      >
        {iconLeft && (
          <IconContainer
            size={size}
            css={{
              left: size === 'md' ? '$4' : '$6'
            }}
          >
            {React.cloneElement(iconLeft)}
          </IconContainer>
        )}
        <StyledInput
          size={size}
          data-testid="input"
          css={{
            ...(iconLeft && { paddingInlineStart: inputPaddingValue }),
            ...(iconRight && { paddingInlineEnd: inputPaddingValue })
          }}
          {...rest}
        />
        {iconRight && (
          <IconContainer
            size={size}
            css={{
              right: size === 'md' ? '$4' : '$6'
            }}
          >
            {React.cloneElement(iconRight)}
          </IconContainer>
        )}
      </Box>
    );
  }
  return (
    <StyledInput ref={ref} size={size} data-testid="input" {...rest} css={css} />
  );
});
