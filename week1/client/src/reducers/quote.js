const quoteReducer = (state = { quote: null, authorQuotes: [] }, action) => {
    // console.log('Reducer received action:', action);
    switch (action.type) {
      case 'FETCH_QUOTE':
        // console.log('Reducer payload:', action.payload);
        return { ...state, quote: action.payload };
      case 'FETCH_QUOTES_BY_AUTHOR':
        return { ...state, authorQuotes: action.payload };
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  