import { createServer } from "node:http";
import { createApplication } from "./app";

async function main() {
  try {
    // const server = createServer(createApplication()); // createServer(express application)
    const server = createServer(createApplication());
    const PORT: number = 8080;

    server.listen(PORT, () => {
      console.log(`HTTP Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(`Error starting http server`);
    throw err;
  }
}

main();
