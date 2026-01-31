import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  message?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload
    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const message = (data.message || '').trim()

    const errors: Record<string, string> = {}
    if (!name) errors.name = 'Nome é obrigatório'
    if (!email || !isValidEmail(email)) errors.email = 'E-mail inválido'
    if (!message || message.length < 10) errors.message = 'Mensagem muito curta'

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 422 })
    }

    // Stub: aqui faremos o envio real (Resend/SMTP) no futuro
    return NextResponse.json({ ok: true, message: 'Recebido. Em breve entraremos em contato.' })
  } catch {
    return NextResponse.json({ ok: false, error: 'Payload inválido' }, { status: 400 })
  }
}

