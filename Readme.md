This is a barebones, newly generated rn 0.72 app

It is for replicating a bug I found when importing classes from outside the root directory. 

We have setup outside imports by adding them to the `metro.config.js` watchFolder array.

```ts
const config = {
    watchFolders: ["../shared"],
};

```

`sharedConstants` can be imported fine inside App.tsx

However when importing `SharedClass` from `shared/SharedClass.ts` in `App.tsx` it fails with the following error:

```bash
 ERROR  [Error: undefined Unable to resolve module @babel/runtime/helpers/interopRequireDefault from ~/monorepo_test/shared/SharedClass.ts: @babel/runtime/helpers/interopRequireDefault could not be found within the project.
> 1 | export class SharedClass {
  2 |     static greeting = "buenos dias"
  3 | }
  4 |]
```

But installing `@babel/runtime` as a dev dependency fixes the issue. 
