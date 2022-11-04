import app from "./app";
import process from "process";

app.listen(process.env.BASE_LISTEN_PORT || 3333, () => {
  console.log(
    `Server is running in port:${process.env.BASE_LISTEN_PORT || 3333} `
  );
});
