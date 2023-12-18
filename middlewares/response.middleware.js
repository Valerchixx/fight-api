const responseMiddleware = (req, res, next) => {
  if(res.err) {
    res.status(400).json({error: true, message: res.err.message})
    return next()
  }

  if(res.data == null) {
    res.status(404).json({error: true, message: "data was not found"})
    return next()
  }

  if (res.data) {
    res.status(200).json(res.data);
    return next()
  }
};

export { responseMiddleware };
