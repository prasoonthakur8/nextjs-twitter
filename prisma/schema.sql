CREATE TABLE TweetBatch (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid VARCHAR(255) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  tweet_1 VARCHAR(280) NOT NULL,
  tweet_2 VARCHAR(280) NOT NULL,
  tweet_3 VARCHAR(280) NOT NULL,
  tweet_4 VARCHAR(280) NOT NULL,
  tweet_5 VARCHAR(280) NOT NULL
);