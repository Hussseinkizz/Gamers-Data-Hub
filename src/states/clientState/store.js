export const initialState = {
  pageHeightFull: false
};

export const reducer = (state, action) => {
  switch (action.payload) {

    case 'SET_PAGE_HEIGHT':
      return {
        ...state,
        pageHeightFull: !state.pageHeightFull
      };

    default:
      return state;
  }
};

//! Above implementation isn't complete!