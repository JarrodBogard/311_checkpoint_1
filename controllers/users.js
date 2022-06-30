const users = require("../data/index");
// const sampleUsers = require("../data/sampleUser");

const listUsers = (req, res) => {
  try {
    res.json(users);
  } catch (e) {
    res.status(500).send("Uh oh, we couldn't find users");
  }
};

const showUsers = (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = users.find((user) => user.id === Number(id));
    if (foundUser === undefined) {
      res.status(404).send(`Unable to find user: ${id}`);
    }
    res.json(foundUser);
  } catch (e) {
    res.status(500).send(`Uh oh, we couldn't access user data`);
  }
};

const createUser = (req, res) => {
  try {
    const newUser = {
      id: users.length + 1,
      ...req.body,
    };

    users.push(newUser);
    res.json(users);
  } catch (e) {
    res
      .status(500)
      .send(`Uh oh, we couldn't create user - check server for errors`);
  }
};

const updatedUser = (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = users.find((user) => user.id === Number(id));
    const foundIndex = users.findIndex((user) => user.id === Number(id));

    if (foundUser === undefined || foundIndex === undefined) {
      res
        .status(404)
        .send(`Unable to find specified user(${id}) to update info`);
    }
    const updatedUser = {
      ...foundUser,
      ...req.body,
    };
    users.splice(foundIndex, 1, updatedUser);
    res.json(updatedUser);
  } catch (e) {
    res.status(500).send(`Unable to update user - check server for errors`);
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  try {
    const user = users.find((user) => user.id === Number(id));
    const foundIndex = users.findIndex((user) => user.id == Number(id));

    if (user === undefined || foundIndex === undefined) {
      res
        .status(404)
        .send(`Unable to find specified user(${id}) to delete info`);
    }
    if (user.isActive === false)
      res.json({ message: `User(${id}) has already been deleted` });

    const delUser = {
      // ...user,
      id: user.id,
      isActive: false,
    };

    users.splice(foundIndex, 1, delUser);
    res.json({ message: `Deleted user entry with id: ${id}` });
  } catch (e) {
    res.status(500).send(`Unable to delete user - check server for errors`);
  }
};

module.exports = {
  listUsers,
  showUsers,
  createUser,
  updatedUser,
  deleteUser,
};
