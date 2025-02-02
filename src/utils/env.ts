export const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, NEXT_PUBLIC_BASE_URL } =
  process.env

export const getBaseURL = () => {
  return NEXT_PUBLIC_BASE_URL || "https://localhost:3000"
}

export const NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
