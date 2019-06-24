'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    titleDescription: DataTypes.STRING,
    authorName: DataTypes.STRING,
    subDomain: DataTypes.INTEGER,
    date: DataTypes.DATE,
    readTime: DataTypes.INTEGER,
    postDescription: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  // Post.associate = function(models) {
  //   // associations can be defined here
  //   models.Post.hasMany(models.Comment);
  // };
  return Post;
};




// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     username: DataTypes.STRING
//   });

//   User.associate = function(models) { 
//     models.User.hasMany(models.Task);
//   };

//   return User;
// };
