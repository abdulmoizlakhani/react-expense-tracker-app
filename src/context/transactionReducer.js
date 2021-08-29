const TransationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "DELETE_TRANSACTION":
      const updatedTransactions = [...state.transactions];
      updatedTransactions.splice(action.payload, 1);
      return { ...state, transactions: updatedTransactions };

    default:
      return state;
  }
};

export default TransationReducer;
