'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postid: DataTypes.INTEGER,
    commentdate: DataTypes.FLOAT,
    commentdata: DataTypes.STRING,
    commentedby: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  // Comment.associate = function(models) {
  //   // associations can be defined here
  //   models.Comment.belongsTo(models.Post, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   }); 
  // };
  return Comment;
};

 




// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Task = sequelize.define('Task', {
//     title: DataTypes.STRING,
//     tag: DataTypes.STRING
//   });

//   Task.associate = function (models) {
//     models.Task.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Task;
// };
