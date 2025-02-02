import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "@utils/env"
import { RequestBody } from "./types"

export async function POST(request: Request) {
  if (request.method === "POST") {
    const { name, email, message }: RequestBody = await request.json()

    const text = `
      New message from ${name} \n
      Email: ${email} \n
      Message: ${message}
    `

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
          }),
        }
      )

      const data = await response.json()

      if (response.ok && data.ok) {
        return Response.json({
          success: true,
          message: "Message sent successfully!",
        })
      } else {
        return Response.json({
          success: false,
          message: "Failed to send message.",
        })
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error)
      return Response.json({
        success: false,
        message: "Error sending message.",
      })
    }
  } else {
    return Response.json({ message: "Method not allowed" })
  }
}
