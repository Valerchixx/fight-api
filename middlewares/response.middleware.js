const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if (res.data) {
    res.status(200).json(res.data);
    return next()
  }
  if(res.err) {
    res.status(400).json({error: true, message: "Error occured"})
    return next()
  }

};

export { responseMiddleware };
