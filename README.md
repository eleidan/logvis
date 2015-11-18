#   LogVis
Application for logs visualization

## Installation and running
1. Clone repository
1. Install dependencies:

  ```
  bundle install
  ```

1. Create `secrets.yml`:
  ```
  touch config/secrets.yml
  ```

1. Generate secret token:
  ```
  rake secret
  ```

1. Set `secrets.yml` to the following content:
  ```
  production:
    secret_key_base: <secret_key>
  ```
Replace `<secret_key>` with result of `rake secret`.

1. Run application in production environment: 

  ```
  rails s -e production
  ```
