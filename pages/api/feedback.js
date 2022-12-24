import clientPromise from "../../lib/mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { message, name, email } = req.body;
      if (!name || !email.includes("@") || email.trim() === "" || !message) {
        return res.status(422).json({ message: "response failed to send" });
      }

      const client = await clientPromise;
      const db = client.db("Blog");
      db.collection("Messages").insertOne({ message, name, email });
    } catch (error) {
      res.status(201).json({ message: "your feedback sent successfully" });
    }
  }
}
export default handler;
