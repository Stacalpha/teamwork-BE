-- ************************************** "Employees"
-- "id" uuid, "isAdmin" boolean, "firstName" varchar(50), "lastName" varchar(50), "email" varchar(320), 
-- "password" varchar(64), "gender" varchar(10), "jobRole" varchar(50), "department" varchar(50), "address" varchar
INSERT INTO "Employees"
	("id", "isAdmin", "firstName", "lastName", "email", "password", "gender", "jobRole", "department", "address")
VALUES
	('127924b6-9894-11e5-be38-001d42efa318', false, 'Arry', 'Porter', 'ayanfe@gmail.com', 'password', 'male', 'Designer', 'User Experience', '1, Some street, random estate, Lagos.'),
	('4b679212-9894-11e5-be38-001d423fee81', false, 'Korede', 'Shonubi', 'korey@gmail.com', 'password', 'male', 'Team Lead', 'Backend', '5, mystreet, Isheri, Lagos.'),
	('791224b6-9894-11e5-be38-001d42e8ef31', true, 'Feranmi', 'Akinlade', 'feranmiakinlade@gmail.com', 'password', 'female', 'Frontend Engineer', 'Frontend', '2, random street, some area, Lagos.');

-- ************************************** "Posts"
-- "id" uuid, "title" varchar(50), "body" varchar(500), "dateCreated" NOW()::timestamp, "author" uuid, "type" varchar(50).
INSERT INTO "Posts" ("id", "title", "body", "dateCreated", "author", "type")
VALUES ('972124b6-9894-11e5-be38-001d42e813fe', 'title', 'body', NOW()::timestamp, '791224b6-9894-11e5-be38-001d42e8ef31', 'gif'),
			 ('972124b6-9894-11e5-be38-001d42e813af', 'title', 'body', NOW()::timestamp, '127924b6-9894-11e5-be38-001d42efa318', 'gif'),
			 ('792124b6-9894-11e5-be38-001d42e813fe', 'title', 'body', NOW()::timestamp, '4b679212-9894-11e5-be38-001d423fee81', 'article');

-- ************************************** "Comments"
-- "id" uuid, "post" uuid, "author" uuid, "dateCreated" NOW()::timestamp, "body" varchar(250)
INSERT INTO "Comments" ("id", "post", "author", "dateCreated", "body")
VALUES ('972124b6-1245-11e5-be38-001d42e813fe', '972124b6-9894-11e5-be38-001d42e813fe', '791224b6-9894-11e5-be38-001d42e8ef31', NOW()::timestamp, 'body'),
			 ('802124b6-9894-11e5-be38-001d42e813fe', '972124b6-9894-11e5-be38-001d42e813af', '127924b6-9894-11e5-be38-001d42efa318', NOW()::timestamp, 'body'),
			 ('807821b6-9894-11e5-be38-001d42e813fe', '792124b6-9894-11e5-be38-001d42e813fe', '4b679212-9894-11e5-be38-001d423fee81', NOW()::timestamp, 'body');

-- ************************************** "RedFlags"
-- "id" uuid, "targetType" varchar(50), "post" uuid, "comment" uuid, "dateFlagged" NOW()::timestamp, "flaggedBy" varchar(20).
INSERT INTO "RedFlags" ("id", "targetType", "post", "comment", "dateFlagged", "flaggedBy")
VALUES ('102124b6-9894-11e5-be38-001d42e813fe', 'post', '972124b6-9894-11e5-be38-001d42e813fe', NULL, NOW()::timestamp, '127924b6-9894-11e5-be38-001d42efa318'),
			 ('103224b6-9894-11e5-be38-001d42e813fe', 'comment', NULL, '802124b6-9894-11e5-be38-001d42e813fe', NOW()::timestamp, '4b679212-9894-11e5-be38-001d423fee81'),
			 ('108924b6-9894-11e5-be38-001d42e813fe', 'post', '792124b6-9894-11e5-be38-001d42e813fe', NULL, NOW()::timestamp, '791224b6-9894-11e5-be38-001d42e8ef31');


