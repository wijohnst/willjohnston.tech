import * as React from 'react';

export type Quality = 'empathy' | 'data' | 'experience' | 'technology';
type RevealListContext = {
  currentQuality: Quality;
};

type Action = { type: 'UPDATE_QUALITY'; payload: Quality };

const initialState: RevealListContext = {
  currentQuality: 'experience',
};

export const RevealListContext =
  React.createContext<RevealListContext>(initialState);
export const RevealListDispatchContext =
  //@ts-ignore
  React.createContext<React.Dispatch<Action>>(initialState);

export const RevealListContextProvider = ({ children }: any) => {
  const [revealListContext, dispatch] = React.useReducer(
    revealListContextReducer,
    initialState,
  );
  return (
    <RevealListContext.Provider value={revealListContext}>
      <RevealListDispatchContext.Provider value={dispatch}>
        {children}
      </RevealListDispatchContext.Provider>
    </RevealListContext.Provider>
  );
};

const revealListContextReducer = (
  revealListContext: RevealListContext,
  action: Action,
): RevealListContext => {
  switch (action.type) {
    case 'UPDATE_QUALITY': {
      return {
        ...revealListContext,
        currentQuality: action.payload,
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};
