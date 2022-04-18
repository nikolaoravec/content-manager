import axios from "axios";

export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();

    return res.send(data);
  }

  if (req.method === "POST") {
    const { title, description, link, time, priority } = req.body;
    if (!title || !description || !link || !time || !priority) {
      return res.status(422).send("Data is missing!");
    }

    try {
      const axiosRes = await axios.post(
        "http://localhost:3001/api/resources",
        req.body
      );
      return res.send(axiosRes.data);
    } catch (error) {
      return res.status(422).send("Data cannot be stored!");
    }
  }
}
