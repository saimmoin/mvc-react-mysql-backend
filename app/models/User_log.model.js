module.exports = (sequelize, Sequelize) => {
  //Structure of Model is defined here.

  const UserLog = sequelize.define("UserLog", {
    ip: {
      type: Sequelize.STRING,
    },
    query: {
      type: Sequelize.STRING,
    },
    // onDate: {
    //   type: Sequelize.DATE
    // }
  });

  return UserLog;
};
