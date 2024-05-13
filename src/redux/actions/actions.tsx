type ChangePageAction = {
  type: 'CHANGE_PAGE';
  payload: number;
};

export const changePage = (increment: number): ChangePageAction => {
  return {
    type: 'CHANGE_PAGE',
    payload: increment,
  };
};
