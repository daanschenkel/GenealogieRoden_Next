//import fetch library
import fetch from "node-fetch";
export default function handler(req, res) {
  //get query

  if (!req.query.id)
    return res.send({ status: "error", message: "ID niet meegegeven" });

  const id = req.query.id;

  var url = "http://localhost:3000/api/search?id=" + id;

  fetch(url)
    .then((res) => res.json())

    .then((data) => {
      res.send(data);
    });
}