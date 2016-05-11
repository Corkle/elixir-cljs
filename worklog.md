# TODO

## Features

- [ ] Authenticated Sessions
  - [x] Create Session
  - [ ] Delete Session
  - [x] Save JWT to local storage
  - [ ] Get current user by JWT
  - [ ] Unauthenticated redirection
- [ ] RethinkDB Queries
  - [x] `insert`
  - [ ] `update`
  - [ ] `delete`
  - [x] `get`
- [ ] Admin Page
  - [ ] Users list

## Bugs


## Log

### Currently Working On
 - FE/Authenticated session container - when JWT is present, but not current user data, fetch current_user. Redirect to login if JWT not present.
 
### Completed
 - User login page and api
 - FE/Save auth token to LocalStorage
 - BE/Encrypt password
 - FE/Show error flash messages on register
 - BE/DB insert errors now conform to structure of Changeset errors
 - FE/Added SPA navigation with Reagent