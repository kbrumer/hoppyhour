CREATE TABLE t_bar_yelp (
    uuid               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    id                 VARCHAR(255),
    name               VARCHAR(255),
    address            VARCHAR(512),
    city               VARCHAR(255),
    state              VARCHAR(16),
    postal_code        VARCHAR(16),
    phone              VARCHAR(16),
    latitude           DECIMAL(9,6),
    longitude          DECIMAL(9,6),
    rating             DECIMAL(4,2),
    review_count       BIGINT,
    image_url          VARCHAR(512),
    categories0        VARCHAR(512),
    categories1        VARCHAR(512),
    categories2        VARCHAR(512)
);
