# Install PostgresDB
* http://www.enterprisedb.com/products-services-training/pgdownload

# Install PostGIS extensions
* start Postgres 9.x -> Application Stack Builder
* select Spatial Extensions -> PostGIS
* see [source](http://www.bostongis.com/?content_name=postgis_tut01) for more details

```
psql -U postgres < data/init.sql;
psql -U postgres < data/user.sql;
pql -U postgres hoppy_hour_db < data/ext.sql;     
pql -U postgres hoppy_hour_db < data/create.sql;     
```

# Data Curation

Data came from Yelp. We converted it from JSON to CSV using [this](http://konklone.io/json/).

They loaded the table into Postgres with this command:

```

```


# Heroku

```
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku addons:create heroku-postgresql:hobby-dev
heroku open
```

# Heroku Postgres

```
heroku pg:psql < data/create.sql
heroku pg:psql < data/yelpData.sql
```

https://hoppy-hour.herokuapp.com/





























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
