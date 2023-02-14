import sql from "@/utils/postgres";
export default async function handler(req, res) {
  const { name, email, message } = req.query;

  const response = await sql`
    insert into contact_messages
        (name, email, message)
    values
        (${name}, ${email}, ${message})    
  `;
  res.json({ message: "Success" });
}
