export default (query) => {
  const { search } = query;
  if (!search || search === '') {
    const err = new Error('The search query is empty');
    err.status = 400;
    throw err;
  }
};
