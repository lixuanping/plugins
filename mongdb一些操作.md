```
mongod --dbpath 仓库的路径

然后在 bin里面输入 mongo.exe


显示数据库
show dbs

检当前数据库
db

添加数据库
use 数据库名  有就是切换到这个数据库 没有就是添加

删除数据库
先切换到对应的数据库 db.dropDatabase()

显示集合
show collections

添加集合
db.createCollection(集合名字)

删除集合
db.集合名.drop()

查看文档
db.集合名.find()


传单个数据到day表(插入文档）
db.day.insert({
   _id: 100,
   title: 'MongoDB Tutorials', 
   description: 'node_tutorials',
   by: 'Oaoafly',
   url: 'https://github.com/Wscats/node-tutorial',
   tags: ['wscat','MongoDB', 'database', 'NoSQL','node'],
   num: 100,
})

db.username.insert({
  username:'13676200101',
  password:'456'
})

传多条数据到day表（没效）
db.day.insert([{
   _id: 100,
   title: ‘Hello’
},{
   _id: 101,
   title: ‘World’
}])

在data表中 除了id和title项  其余的都被删除掉
db.data.save({
   _id: 100,
   title: 'Oaoafly Wscats', 
})


在data表寻找第一条title为b的值，并且更新值title为c和id为14 如果没有id就是添加
db.data.update({
  'title':'b'
}, {
  $set: {
    'title': 'c',
    'id': 14
  }
})

在data表寻找所有title为Oaoafly Wscats的值，并且更新值title为id和age为12
db.data.update({
  'title': 'Oaoafly Wscats'
}, {
  $set: {
    'title': 'corrine',
    'id': 12
  }
}, {
  multi: true
})

```

