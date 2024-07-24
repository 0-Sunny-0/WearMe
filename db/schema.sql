CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT,
  password TEXT
);

CREATE TABLE closet_category (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE clothing_slot (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE outfit (
  id SERIAL PRIMARY KEY,
  items TEXT NOT NULL,
  username TEXT NOT NULL
);

CREATE TABLE outfit_item (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category_id INTEGER NOT NULL,
  slot_id INTEGER NOT NULL,
  image_path TEXT NOT NULL,
  owner TEXT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES closet_category(id),
  FOREIGN KEY (slot_id) REFERENCES clothing_slot(id)
);