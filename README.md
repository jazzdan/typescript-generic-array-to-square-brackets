# Generic array to square bracket array transformer

This is a [jscodeshift](https://github.com/facebook/jscodeshift) transformer that converts TypeScript arrays that look like this:

```typescript
Array<T>
```

To ones that look like this:

```typescript
T[]
```

## How to Use

0. `yarn global add jscodeshift`
1. Copy [`transform.js`](https://github.com/jazzdan/typescript-generic-array-to-square-brackets/blob/master/transform.js) down to your local machine.
2. Invoke jscodeshift with the transformer like so `jscodeshift -t ~/path/to/typescript-generic-array-to-square-brackets/transform.js --extensions=ts --parser=ts src/`
3. Profit!
