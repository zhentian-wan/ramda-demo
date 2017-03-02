## Point-free 

So what is Point-free function.
Take a look this example:

```
const getUpdatedPerson = (person) => R.assoc('avatar', getUrlFromPerson(person), person);
```
To make it as point-free function, we need to get rid of `person` object we pass into the function.

First way, we can use `R.converge`:
```
const getUpdatedPerson = R.coverage(
    R.assoc('avatar'),
    [
        getUrlFromPerson,
        R.identity
    ]
)
```

More detail check [converge](converge.js)

Second way is to use `R.useWith`:

