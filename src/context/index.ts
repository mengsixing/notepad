import * as React from 'react';
export const AppContext = React.createContext({
  showTable: false,
  toggleTable: () => { return; },
});
