const reducer = (state, action) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    let state = false;
    if (state.isSidebarOpen === false) {
      state.isSidebarOpen = true;
    } else {
      state.isSidebarOpen = false;
    }
    return { ...state, isSidebarOpen: state };
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
