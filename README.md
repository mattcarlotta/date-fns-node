## Date-fns running on Node

An example of using the [date-fns](https://www.npmjs.com/package/date-fns) dependency within a node environment running an Express server.

| `yarn <command>` | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `build`          | Compiles source to `build` for production.             |
| `dev`            | Starts development servers (`localhost:4000` for api). |
| `lint`           | Lints all `.ts` files in root directory.               |
| `start`          | Starts production server (must run `build` first).     |
| `tsc`            | Type checks all `.ts` files within the root directory. |

To query the API

Get current date:

```dosini
http://localhost:4000/api/date
```

Get a formatted date:

```dosini
http://localhost:4000/api/date/2019-02-10T02:30:31.834+00:00
```