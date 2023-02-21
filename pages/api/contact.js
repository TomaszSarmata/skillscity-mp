import sql from "@/utils/postgres";
export default async function handler(req, res) {
  const { name, email, message } = req.body;

  if (name === undefined) {
    res.status(400).json({ message: "Name is required " });
    return;
  }

  if (email === undefined) {
    res.status(400).json({ message: "Email is required " });
    return;
  }

  if (message === undefined) {
    res.status(400).json({ message: "Message is required " });
    return;
  }

  const response = await sql`
    insert into contact_messages
        (name, email, message)
    values
        (${name}, ${email}, ${message})    
  `;
  res.json({ message: "Success" });
}
