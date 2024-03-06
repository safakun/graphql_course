# GraphQL course 
https://www.youtube.com/watch?v=jYYjIWXG1_A 

- GraphQL is a query language for APIs that enables clients to request only the data they need, and nothing more. It provides a more efficient, powerful and flexible alternative to Traditional REST APIs 

- Benefits of Graphq:
1. GraphQL reduces data transfer, improving performance
2. GraphQl provides more flexibility for clients to request data
3. GraphQL offers a better developer experience with a strong type system and simplified iteration 


- Installing 
```bash
npm init -y 

npm i @apollo/server @prisma/client cors dotenv express graphql

npm i -D @types/cors @types/express @types/node nodemon prisma ts-node typescript
``` 

- Run database 
```bash
sudo docker compose up
```
- run prisma
```bash
npx prisma studio 

``` 
http://localhost:5555 

- Run server
```bash
npm run dev
```

