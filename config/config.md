#### NODE_ENV
Node environment.
Default: `development`

#### PORT
Server port `8000`.

#### MONGO_URI
Mongo DB connection URL to DB. Check Atlas and Compass if available.

## GEOCODER

#### GEOCODER_PROVIDER
Geocoder provider https://developer.mapquest.com/
Default: `mapquest`

#### GEOCODER_API_KEY
Check Consumer Key in Profile tab.

#### FILE_UPLOAD_PATH
Path to images.
Default: `./public/uploads`

#### MAX_FILE_UPLOAD
Max amount.
Default: `1000000`

#### JWT_SECRET
JWT secret token. Could be random in our case.
Default: `somerandomtoken123`

#### JWT_EXPIRE
Expiration time.
Default: `30d`

#### JWT_COOKIE_EXPIRE
Default: `30`

## Mailtrap.io for password reset on email
https://mailtrap.io/

#### SMTP_HOST
Default: `smtp.mailtrap.io`

#### SMTP_PORT
Default: `2525`

#### SMTP_EMAIL=f9f4f5efaec74c
Take from SMTP / POP3 credentials

#### SMTP_PASSWORD
Take from SMTP / POP3 credentials

#### FROM_EMAIL
Who sends email.
Default: `noreply@devcamper.io`

#### FROM_NAME
Who sends email name.
Default: `DevCamper`
