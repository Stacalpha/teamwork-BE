DROP TABLE IF EXISTS "RedFlags";
DROP TABLE IF EXISTS "Comments";
DROP TABLE IF EXISTS "Posts";
DROP TABLE IF EXISTS "Employees";

-- ************************************** "Employees"
CREATE TABLE "Employees"
(
 "id"           uuid NOT NULL,
 "isAdmin"      boolean DEFAULT false,
 "firstName"    varchar(50) NOT NULL, --  PRIMARY KEY
 "lastName"     varchar(50) NOT NULL,
 "email"        varchar(320) NOT NULL UNIQUE,
 "password"     varchar(64) NOT NULL,
 "gender"       varchar(10),
 "jobRole"      varchar(50) NOT NULL,
 "department"   varchar(50) NOT NULL,
 "address"      varchar NOT NULL
);

CREATE UNIQUE INDEX "PK_Employees" ON "Employees"
(
 "id"
);

-- ************************************** "Posts"
CREATE TABLE "Posts"
(
 "id"          uuid NOT NULL,
 "title"       varchar(50) NOT NULL,
 "body"        varchar(50) NOT NULL,
 "dateCreated" timestamp NOT NULL,
 "author"      uuid NOT NULL,
 "type"        varchar(50) NOT NULL,
 CONSTRAINT "FK_16" FOREIGN KEY ( "author" ) REFERENCES "Employees" ( "id" )
);

CREATE UNIQUE INDEX "PK_Posts" ON "Posts"
(
 "id"
);

CREATE INDEX "fkIdx_16" ON "Posts"
(
 "author"
);

-- ************************************** "Comments"

CREATE TABLE "Comments"
(
 "id"          uuid NOT NULL,
 "post"        uuid NOT NULL,
 "author"      uuid NOT NULL,
 "dateCreated" timestamp NOT NULL,
 "body"        varchar(50) NOT NULL,
 CONSTRAINT "FK_26" FOREIGN KEY ( "post" ) REFERENCES "Posts" ( "id" ),
 CONSTRAINT "FK_29" FOREIGN KEY ( "author" ) REFERENCES "Employees" ( "id" )
);

CREATE UNIQUE INDEX "PK_Comments" ON "Comments"
(
 "id"
);

CREATE INDEX "fkIdx_26" ON "Comments"
(
 "post"
);

CREATE INDEX "fkIdx_29" ON "Comments"
(
 "author"
);

-- ************************************** "RedFlags"
CREATE TABLE "RedFlags"
(
 "id"          uuid NOT NULL,
 "targetType"  varchar(50) NOT NULL,
 "post"        uuid NULL,
 "comment"     uuid NULL,
 "dateFlagged" timestamp NOT NULL,
 "flaggedBy"   uuid NOT NULL,
 CONSTRAINT "FK_36" FOREIGN KEY ( "post" ) REFERENCES "Posts" ( "id" ),
 CONSTRAINT "FK_40" FOREIGN KEY ( "flaggedBy" ) REFERENCES "Employees" ( "id" ),
 CONSTRAINT "FK_53" FOREIGN KEY ( "comment" ) REFERENCES "Comments" ( "id" )
);

CREATE UNIQUE INDEX "PK_FlaggedPosts" ON "RedFlags"
(
 "id"
);

CREATE INDEX "fkIdx_36" ON "RedFlags"
(
 "post"
);

CREATE INDEX "fkIdx_40" ON "RedFlags"
(
 "flaggedBy"
);

CREATE INDEX "fkIdx_53" ON "RedFlags"
(
 "comment"
);




