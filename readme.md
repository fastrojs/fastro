# Fast and simple web framework

[High performance](#perfomance) backend module. Built on top of [Deno standard library](https://deno.land/std). No external dependencies. Written in TypeScript.

## Features
- [Command line interface](#command-line-interface)
- URL routing by file name
- Dynamic URL parameters
- Supports cookie
- Supports `multipart/form-data`
- Supports `application/json`
- Supports `application/x-www-form-urlencoded`


You can see the detail of implementation in [the examples.](https://github.com/fastrodev/fastro/blob/master/services)

## Getting started
- Create `main.ts`
    ```ts
    import { Fastro } from "https://raw.githubusercontent.com/fastrodev/fastro/master/mod.ts";
    new Fastro().listen();
    ```
- Run with command
    ```
    deno run -A main.ts
    ```
- Output
    ```
    HTTP webserver running.  Access it at:  http://localhost:3000
    ```


## How to add a handler
- Create a new folder with command: `mkdir webapp`

    The structure will be like this:
    ```
    webapp
    ├── main.ts
    └── services
        └── hello.controller.ts
    ```
    
    File and folder description:
    - `main.ts`: Webapp entrypoint.
    - `services`: Default folder for all handler files. You can change it via [ServerOptions](core/types.ts).
    - `services/hello.controller.ts`: Endpoint handler. You can access it via URL: [http://localhost:3000/hello](http://localhost:3000/hello).

- Create entrypoint `main.ts`
    ```ts
    import { Fastro } from "https://raw.githubusercontent.com/fastrodev/fastro/master/mod.ts";
    const server = new Fastro();
    server.listen();
    ```
    - You can add [ServerOptions](core/types.ts) on Fastro construtor to change default service folder, add url prefix, or enable cors.
    - You can pass [ListenOptions](core/types.ts) on listen function to change default port and address.

- Create handler `services/hello.controller.ts`
    ```ts
    import type { Request } from "https://raw.githubusercontent.com/fastrodev/fastro/master/mod.ts";

    export const handler = (request: Request) => {
      request.send("hello");
    };

    ```

    **Please note that the handler file name will be used as URL endpoint.**

- Run server
    ```
    deno run -A main.ts
    ```
- Open url
    ```
    http://localhost:3000/hello
    ```


## Command line interface

You can also run your project using fastro command line interface (fastro-cli). 

With this, you don't need an entrypoint file (`main.ts`) anymore.

- Install fastro-cli
    ```
    deno install -A https://raw.githubusercontent.com/fastrodev/fastro/master/cli/fastro.ts
    ```

- Run in development (HMR)

    All modules will be reloaded again if there are changes.

    ```
    fastro serve
    ```
- Run in production

    You can change the app port also.

    ```
    fastro serve --port 8080 --production
    ```

## Perfomance

|Module|Version|Req/s|Percentage|
|--|--:|--:|--:|
|[Deno](benchmarks/deno_app.ts)|0.71.0|15868.80|100.00%|
|[Fastro](benchmarks/fastro_app.ts)|0.30.2|15323.64|96.56%|

You can see the details [here](https://github.com/fastrodev/fastro/blob/master/benchmarks).