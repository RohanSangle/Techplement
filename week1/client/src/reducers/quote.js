const quoteReducer = (state = { quote: null }, action) => {
    // console.log('Reducer received action:', action);
    switch (action.type) {
      case 'FETCH_QUOTE':
        // console.log('Reducer payload:', action.payload);
        return { ...state, quote: action.payload };
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  