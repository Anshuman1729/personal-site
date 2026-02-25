import { NextRequest, NextResponse } from 'next/server'

const BEEHIIV_PUB_ID = 'pub_1209a3dd-cebb-4f60-b283-177893e6a2cb'
const BEEHIIV_API_KEY = 'LUeYUUu3sqIuQMbdBlnh46rcDzFPhAhC9dDKKmqnAyMqebYZCUf9eaHp4F6Joj7Q'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
        }),
      }
    )

    if (res.ok) {
      return NextResponse.json({ success: true })
    }

    const data = await res.json()
    return NextResponse.json(
      { error: data?.message ?? 'Beehiiv error. Please try again.' },
      { status: res.status }
    )
  } catch {
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
