const users = require("../data/index");
// const sampleUsers = require("../data/sampleUser");

const listUsers = (req, res) => res.json(users);

const showUsers = (req, res) => {
  const id = req.params.id;
  const foundUser = users.find((user) => user.id === Number(id));
  res.json(foundUser);
};

const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };

  users.push(newUser);
  res.json(users);
};

const updatedUser = (req, res) => {
  const id = req.params.id;
  const foundUser = users.find((user) => user.id === Number(id));
  const foundIndex = users.findIndex((user) => user.id === Number(id));

  const updatedUser = {
    ...foundUser,
    ...req.body,
  };
  users.splice(foundIndex, 1, updatedUser);
  res.json(updatedUser);
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === Number(id));
  const foundIndex = users.findIndex((user) => user.id == Number(id));

  const delUser = {
    // ...user,
    id: user.id,
    isActive: false,
  };

  users.splice(foundIndex, 1, delUser);
  res.json({ message: `Deleted user entry with id: ${id}` });
};

module.exports = {
  listUsers,
  showUsers,
  createUser,
  updatedUser,
  deleteUser,
};
