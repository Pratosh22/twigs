import React from 'react';
import { styled } from '../../stitches.config';

export const Table = styled('table', {});

export const TableBody = styled('tbody', {});

export const TableHeader = styled('thead', {
  padding: '$6',
  background: '$neutral100',
  '& > tr': {
    '&:hover': {
      background: '$neutral100',
    },
  },
});

export const TableHeaderCell = styled('th', {
  padding: '$6',
  margin: '0',
  borderRight: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$5',
  fontSize: '$sm',
  '&:last-child': {
    borderRight: 'none',
  },
});

export const TableRow = styled('tr', {
  '&:hover': {
    background: '$neutral50',
  },
});

export const TableRowCell = styled('td', {
  padding: '$6',
  margin: '0',
  borderRight: '$borderWidths$xs solid $colors$neutral200',
  fontWeight: '$4',
  color: '$neutral800',
  fontSize: '$sm',
  verticalAlign: 'middle',
  '&:last-child': {
    borderRight: 'none',
  },
});
