function createMessage(name, email, message) {
  return {
    name,
    email,
    message,
    date: new Date(),
  };
}

export default createMessage;
