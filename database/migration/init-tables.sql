-- ************************************** "Employees"
-- "username" varchar(20), "name" varchar(50), "isAdmin" boolean, "email" varchar(320), "password" varchar(64).
INSERT INTO "Employees" ("username", "name", "isAdmin", "email", "password")
VALUES ('cirqlar', 'Arry Porter', false, 'ayanfe@gmail.com', 'password'),
			 ('Korey', 'Oluwa Korede', false, 'korey@gmail.com', 'password'),
			 ('stacalpha', 'Feranmi Akinlade', true, 'feranmi@gmail.com', 'password');

-- ************************************** "Posts"
-- "id" uuid, "title" varchar(50), "body" varchar(500), "dateCreated" NOW()::timestamp, "author" varchar(20), "type" varchar(50).
INSERT INTO "Posts" ("id", "title", "body", "dateCreated", "author", "type")
VALUES ('972124b6-9894-11e5-be38-001d42e813fe', 'title', 'body', NOW()::timestamp, 'stacalpha', 'gif'),
			 ('972124b6-9894-11e5-be38-001d42e813af', 'title', 'body', NOW()::timestamp, 'cirqlar', 'gif'),
			 ('792124b6-9894-11e5-be38-001d42e813fe', 'title', 'body', NOW()::timestamp, 'Korey', 'article');

-- ************************************** "Comments"
-- "id" uuid, "post" uuid, "author" varchar(20), "dateCreated" NOW()::timestamp, "body" varchar(250)
INSERT INTO "Comments" ("id", "post", "author", "dateCreated", "body")
VALUES ('972124b6-1245-11e5-be38-001d42e813fe', '972124b6-9894-11e5-be38-001d42e813fe', 'stacalpha', NOW()::timestamp, 'body'),
			 ('802124b6-9894-11e5-be38-001d42e813fe', '972124b6-9894-11e5-be38-001d42e813af', 'cirqlar', NOW()::timestamp, 'body'),
			 ('807821b6-9894-11e5-be38-001d42e813fe', '792124b6-9894-11e5-be38-001d42e813fe', 'Korey', NOW()::timestamp, 'body');

-- ************************************** "RedFlags"
-- "id" uuid, "targetType" varchar(50), "post" uuid, "comment" uuid, "dateFlagged" NOW()::timestamp, "flaggedBy" varchar(20).
INSERT INTO "RedFlags" ("id", "targetType", "post", "comment", "dateFlagged", "flaggedBy")
VALUES ('102124b6-9894-11e5-be38-001d42e813fe', 'post', '972124b6-9894-11e5-be38-001d42e813fe', NULL, NOW()::timestamp, 'cirqlar'),
			 ('103224b6-9894-11e5-be38-001d42e813fe', 'comment', NULL, '802124b6-9894-11e5-be38-001d42e813fe', NOW()::timestamp, 'Korey'),
			 ('108924b6-9894-11e5-be38-001d42e813fe', 'post', '792124b6-9894-11e5-be38-001d42e813fe', NULL, NOW()::timestamp, 'stacalpha');


