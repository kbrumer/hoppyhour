# Install PostgresDB
* http://www.enterprisedb.com/products-services-training/pgdownload

# Install PostGIS extensions
* start Postgres 9.x -> Application Stack Builder
* select Spatial Extensions -> PostGIS
* see [source](http://www.bostongis.com/?content_name=postgis_tut01) for more details



export DATABASE_URL= 'postgres://postgres:$PASSWORD@localhost:5432/hoppy_hour_db';
var connectionString = process.env.DATABASE_URL;


```

psql -U postgres < create.sql;

CREATE DATABASE hoppy_hour_db
  WITH OWNER = postgres
     TEMPLATE template0
     ENCODING = 'UTF8'
     LC_COLLATE = 'en_US.UTF-8'
     LC_CTYPE = 'en_US.UTF-8'
     TABLESPACE = pg_default
     CONNECTION LIMIT = -1;


CREATE USER hoppy WITH PASSWORD 'hops4ever';
GRANT ALL PRIVILEGES ON DATABASE hoppy_hour_db TO hoppy;
ALTER USER hoppy WITH SUPERUSER;

GRANT USAGE ON SCHEMA pg_toast TO hoppy;
GRANT USAGE ON SCHEMA pg_temp_1 TO hoppy;
GRANT USAGE ON SCHEMA pg_toast_temp_1 TO hoppy;
GRANT USAGE ON SCHEMA pg_catalog TO hoppy;
GRANT USAGE ON SCHEMA public TO hoppy;
GRANT USAGE ON SCHEMA information_schema TO hoppy;
GRANT USAGE ON SCHEMA topology TO hoppy;
GRANT USAGE ON SCHEMA tiger TO hoppy;
GRANT USAGE ON SCHEMA tiger_data TO hoppy;


pql -U postgres hoppy_hour_db < extensions.sql;     

CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;
CREATE EXTENSION fuzzystrmatch;
// CREATE EXTENSION postgis_tiger_geocoder;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "tablefunc";

DROP CAST IF EXISTS (VARCHAR AS JSON);
CREATE CAST (VARCHAR AS JSON) WITHOUT FUNCTION AS IMPLICIT;

CREATE TABLE t_bar (
    uuid               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name               VARCHAR(255),
    address            VARCHAR(512),
    latitude           DECIMAL(9,6),
    longitude          DECIMAL(9,6),
    hoppy_level        INT
);
```




```
SELECT * FROM t_bar
  WHERE ST_DWithin(
    Geography(ST_MakePoint(longitude, latitude)),
    Geography(ST_MakePoint(-122.678204, 45.522536)),
    318
  );

```






























To test:

```
psql -U Postgres
CREATE DATABASE gisdb;
\connect gisdb;
-- Enable PostGIS (includes raster)
CREATE EXTENSION postgis;
-- Enable Topology
```


Query [source](http://gis.stackexchange.com/questions/57072/how-to-find-points-in-a-kilometre-radius):

```
CREATE INDEX mytable_gix ON mytable USING GIST (Geography(ST_MakePoint(lon, lat)));

SELECT * FROM mytable
  WHERE ST_DWithin(
    Geography(ST_MakePoint(lon, lat)),
    Geography(ST_MakePoint($qlon, $qlat)),
    $radius_meters
  );

```

```
CREATE INDEX mytable_gix ON mytable USING GIST (Geography(geom));

SELECT * FROM mytable
  WHERE ST_DWithin(
    Geography(geom),
    Geography(ST_MakePoint($qlon, $qlat)),
    $radius_meters
  );
```


http://www.bostongis.com/?content_name=postgis_tut03



http://unserializableone.blogspot.com/2007/02/using-postgis-to-find-points-of.html



https://devcenter.heroku.com/articles/heroku-postgres-extensions-postgis-full-text-search
