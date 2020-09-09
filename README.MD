
## 1. Quick Start
### 1-1. Start the graphql server
```
$ npm install
$ npm start
```

### 1-2. Open the following url for Playground
```
http://localhost:3000/graphql
```

### 1-3. Run the following queries
```
query getAllBooks{
  getAllBooks {
    title
    author
    gender
  }
}
```

```
query getBooksByGender{
  getBooksByGender(gender:"Female") {
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