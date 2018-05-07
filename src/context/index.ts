import * as React from 'react';
// contentType, 0: todolist,1:table,2:upload

export const AppContext = React.createContext({
  contentType: 0,
  toggleContent: () => { return; },
});
