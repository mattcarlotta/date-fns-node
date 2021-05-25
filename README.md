## Date-fns running on Node (ejs)

An example of using the [date-fns](https://www.npmjs.com/package/date-fns) dependency within a node environment running an Express server (ejs).

### Installation

1.) Clone repo: `git clone git@github.com:mattcarlotta/date-fns-node.git --branch ejs`

2.) Install deps: `cd date-fns-node && yarn`

3.) Run dev: `yarn dev`

4.) See below to [view pages](#view-pages).

### Scripts

| `yarn <command>` | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `build`          | Compiles source to `build` for production.             |
| `dev`            | Starts development servers (`localhost:4000` for api). |
| `lint`           | Lints all `.ts` files in root directory.               |
| `start`          | Starts production server (must run `build` first).     |
| `tsc`            | Type checks all `.ts` files within the root directory. |

### View pages

View home:

```dosini
http://localhost:4000
```

View current date:

```dosini
http://localhost:4000/date
```

View a formatted date:

```dosini
http://localhost:4000/date/2019-02-10T02:30:31.834+00:00
```
