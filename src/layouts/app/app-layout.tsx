import * as React from 'react';
import {
  HeaderComponent,
  NavbarComponent,
  FooterComponent
} from './components';
import classes from './app-layout.module.css';
import { DialogComponent } from '@/common';
import { useDialogContext } from '@/core/providers';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  const { dialog, setDialog } = useDialogContext();

  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <main className={classes.mainContent}>{children}</main>
      <FooterComponent />
      <DialogComponent dialog={dialog} setDialog={setDialog}></DialogComponent>
    </>
  );
};
