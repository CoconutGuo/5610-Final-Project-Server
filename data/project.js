/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 70003 (7.0.3)
 Source Host           : localhost:27017
 Source Schema         : project

 Target Server Type    : MongoDB
 Target Server Version : 70003 (7.0.3)
 File Encoding         : 65001

 Date: 09/12/2023 20:55:04
*/
// use('mongodbVSCodePlaygroundDB');

// ----------------------------
// Collection structure for follows
// ----------------------------
db.getCollection("follows").drop();
db.createCollection("follows");
db.getCollection("follows").createIndex({
    uid: NumberInt("1")
}, {
    name: "uid_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of follows
// ----------------------------
db.getCollection("follows").insert([ {
    _id: ObjectId("65731f031e7eda3e513a08cd"),
    uid: ObjectId("657317f3bcfb3ed1acbd5e96"),
    following: [
        ObjectId("656f35162f5ef9c83f8392ab"),
        ObjectId("657323cc9379b765540d447b")
    ],
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for moves
// ----------------------------
db.getCollection("moves").drop();
db.createCollection("moves");
db.getCollection("moves").createIndex({
    uid: NumberInt("1")
}, {
    name: "uid_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of moves
// ----------------------------

// ----------------------------
// Collection structure for reviews
// ----------------------------
db.getCollection("reviews").drop();
db.createCollection("reviews");

// ----------------------------
// Documents of reviews
// ----------------------------
db.getCollection("reviews").insert([ {
    _id: ObjectId("65730c87ae9a35e49481bb5c"),
    uid: ObjectId("656f35162f5ef9c83f8392ab"),
    imdbID: "tt0038650",
    rated: "5",
    content: "给v梵蒂冈反对国防大厦股份",
    Poster: "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
    movieTitle: "It's a Wonderful Life",
    createAt: ISODate("2023-12-08T12:31:03.194Z"),
    status: "Public",
    __v: NumberInt("0"),
    username: "test"
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    username: NumberInt("1")
}, {
    name: "username_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("656f35162f5ef9c83f8392ab"),
    username: "test",
    password: "111",
    email: "user@example.com",
    phone: "11111",
    nickname: "ttt",
    gender: "Other",
    role: "USER"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("657317f3bcfb3ed1acbd5e96"),
    username: "aaa",
    password: "111",
    email: "aaa@qq.com",
    phone: "12345678999",
    nickname: "和考反对法v",
    gender: "Other",
    intro: "犯得上翻跟斗广泛大锅饭广泛的很过分的话",
    role: "USER",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("657323cc9379b765540d447b"),
    username: "qqq",
    password: "qqq",
    email: "qqq@qq.com",
    phone: "78789465",
    nickname: "广泛广泛大锅饭大锅饭给",
    gender: "Other",
    intro: "gffhgfdhgfh",
    role: "USER",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6573c9d7523200af74046df1"),
    username: "admin",
    password: "111",
    email: "admin@admin.com",
    phone: "888888888888",
    nickname: "Admin User",
    gender: "Other",
    role: "ADMIN"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6573d363ab78483f5d0c0584"),
    username: "rrr",
    password: "111",
    email: "rrr@rrr.com",
    phone: "99999",
    nickname: "rrrrr",
    gender: "Other",
    role: "REVIEW",
    __v: NumberInt("0")
} ]);
