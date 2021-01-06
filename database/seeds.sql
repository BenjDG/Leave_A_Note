USE leaveAnote_db;

INSERT INTO `Groups` (name, createdAt, updatedAt)
VALUES ('TestGroup1', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO `Groups` (name, createdAt, updatedAt)
VALUES ('TestGroup2', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO `Groups` (name, createdAt, updatedAt)
VALUES ('TestGroup3', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO users (email, password, first_name, last_name, createdAt, updatedAt)
VALUES ('test@test.com', "test1", 'Test1FirstName', 'Test1LastName', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO users (email, password, first_name, last_name, createdAt, updatedAt)
VALUES ('test@test.com', "test2", 'Test2FirstName', 'Test2LastName', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO users (email, password, first_name, last_name, createdAt, updatedAt)
VALUES ('test@test.com', "test3", 'Test3FirstName', 'Test3LastName', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO notes (title, body, createdAt, updatedAt, userId)
VALUES ('TestNote1Title', 'TestNote1Body', '2020-01-01 10:10:10','2020-01-01 10:10:10',1);

INSERT INTO notes (title, body, createdAt, updatedAt, userId)
VALUES ('TestNote2Title', 'TestNote2Body', '2020-01-01 10:10:10','2020-01-01 10:10:10',2);

INSERT INTO notes (title, body, createdAt, updatedAt, userId)
VALUES ('TestNote3Title', 'TestNote3Body', '2020-01-01 10:10:10','2020-01-01 10:10:10',3);