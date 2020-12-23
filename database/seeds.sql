USE leaveAnote_db;

INSERT INTO `Groups` (name, createdAt, updatedAt)
VALUES ('TestGroup1', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO users (email, password, first_name, last_name, createdAt, updatedAt)
VALUES ('test@test.com', "test", 'TestFirstName', 'TestLastName', '2020-01-01 10:10:10','2020-01-01 10:10:10');

INSERT INTO notes (title, body, createdAt, updatedAt, userId)
VALUES ('TestNoteTitle', 'TestNoteBody', '2020-01-01 10:10:10','2020-01-01 10:10:10',1);