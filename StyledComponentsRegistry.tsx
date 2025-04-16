'use client';

import React from 'react';
import { StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // This will work both during server-side rendering and client rendering
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      {children}
    </StyleSheetManager>
  );
}
