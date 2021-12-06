# Run and Test

## Start server
```
yarn run start
```

## Test
```
curl -d "username=joe&password=wrong" -X POST http://localhost:3000/login
curl -d "username=joe&password=hard2guess" -X POST http://localhost:3000/users
curl -d "username=joe&password=hard2guess" -X POST http://localhost:3000/login

```
