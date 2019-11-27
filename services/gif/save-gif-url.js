/* eslint-disable no-console */
const pg = require('pg');
const uuid = require('uuid/v4');

const { DATABASE_URL } = require('../../constants/constants');
const createPostQuery = require('../../database/queries');

const pool = new pg.Pool({ connectionString: DATABASE_URL });

const saveGifMetadata = async (author, title, imageUrl) => {
  const id = uuid();
  const dateCreated = Date.now();

  const postData = [id, title, imageUrl, dateCreated, author, 'gif'];

  // @ts-ignore
  await pool.query(createPostQuery, postData);

  return {
    gifId: id,
    createdOn: dateCreated,
    title,
    imageUrl,
  };
};

module.exports = saveGifMetadata;
