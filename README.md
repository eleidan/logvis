#   LogVis
Application for logs visualization

## Installation and running
1. Clone repository
1. Install dependencies:

  ```
  bundle install
  ```

1. Generate secret token:
  ```
  echo SECRET_KEY_BASE=`rake secret` > .env
  ```

1. Run application:

  ```
  rails s
  ```
