export const initialState = {
  selectedCategory: 'birth related data'
};

export const reducer = (state, action) => {
  switch (action.payload) {

    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.selection
      };

    default:
      return state;
  }
};

