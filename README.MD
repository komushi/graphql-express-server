
## 1. Quick Start
### 1-1. Start the graphql server
```
$ npm install
$ npm start
```

### 1-2. Open the following url for GraphiQL
```
http://localhost:3000/graphiql
```

### 1-3. Run the following queries
```
{
  getAllBooks {
    title
    author
    gender
  }
}
```

```
{
  getBooks(gender:"F") {
    title
    author
    gender
  } 
}
```

## 2. References
* https://www.apollographql.com/docs/apollo-server/example.html
* https://graphql.org/graphql-js/passing-arguments/
* https://github.com/theogravity/graphql-apollo-server-client-example