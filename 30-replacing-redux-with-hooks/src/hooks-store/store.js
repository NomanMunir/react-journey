import { useEffect, useState } from "react";

let globalState = {};

let listeners = [];

let actions = {};

export function useStore(shouldListen = true) {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) listeners.push(setState);
    return () => {
      if (shouldListen) listeners = listeners.filter((lis) => lis !== setState);
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
}

export function initStore(userActions, initState) {
  if (initState) globalState = { ...globalState, ...initState };
  actions = { ...actions, ...userActions };
}
