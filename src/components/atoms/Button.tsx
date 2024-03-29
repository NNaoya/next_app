import React from "react";
import Button from '@material-ui/core/Button';

export const ColorButton = ({ children }: {children: string}) => (
  <Button variant="contained" color="primary">
    {children}
  </Button>
);
