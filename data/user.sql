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
