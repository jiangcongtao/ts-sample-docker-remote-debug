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

## Debug Containerized application
A reliable way to attach debugger to containerized application is 
1 . `docker-compose up` start service
2 . Create attach configuration to attach VS Code to exposed node `inspect-brk` or `inspect` port of the containerized app