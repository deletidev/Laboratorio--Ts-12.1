import React from 'react';
import { Router } from '@/core/router';
import { ProfileProvider } from '@/core/providers';

import './style.css';
import { DialogProvider } from './core/providers/dialog.component.context';

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <DialogProvider>
        <Router />
      </DialogProvider>
    </ProfileProvider>
  );
};
