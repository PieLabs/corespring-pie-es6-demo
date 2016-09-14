exports.model = (question, session, env) => {
  console.log('!! -> return the model for now.');
  return 'from the server: ' + question.model;
}