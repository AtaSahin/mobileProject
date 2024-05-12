export const changePage = increment => {
  return {
    type: 'CHANGE_PAGE',
    payload: increment,
  };
};
