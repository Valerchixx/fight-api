const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if(res.err) {
    res.status(400).json({error: true, message: res.err.message})
    return next()
  }

  if (res.data) {
    res.status(200).json(res.data);
    return next()
  }
};

export { responseMiddleware };
