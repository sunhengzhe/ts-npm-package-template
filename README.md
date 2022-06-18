# NPM Typescript package

## Dependency

```
yarn add -D typescript prettier tslint tslint-config-prettier jest ts-jest @types/jest
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./lib",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/__tests__/*"]
}
```

## Scripts

**prepare** will run both BEFORE the package is packed and published, and on local npm install. Perfect for running building the code.

**prepublishOnly** will run BEFORE prepare and ONLY on npm publish.

**preversion** will run before bumping a new package version.

**version** will run after a new version has been bumped. This command will run BEFORE the commit is made.

**postversion** will run after the commit has been made. A perfect place for pushing the commit as well as the tag.

## Publish

1. Bumping a new version

```
npm version [newversion | major | minor | patch | ...]
```

2. Publish

```
npm publish
```