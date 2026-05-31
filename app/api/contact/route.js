import { NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const payload = await request.json();
  const { name = '', email = '', service = '', message = '', website = '' } = payload;

  if (website) {
    return NextResponse.json(
      { message: 'Solicitud rechazada por control anti robots.' },
      { status: 400 }
    );
  }

  const errors = {};

  if (name.trim().length < 3) {
    errors.name = 'Ingrese un nombre de al menos 3 caracteres.';
  }

  if (!emailPattern.test(email.trim())) {
    errors.email = 'Ingrese un correo electronico valido.';
  }

  if (!service.trim()) {
    errors.service = 'Seleccione o indique un servicio.';
  }

  if (message.trim().length < 10) {
    errors.message = 'El mensaje debe contener al menos 10 caracteres.';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: 'Revise los campos marcados.', errors },
      { status: 422 }
    );
  }

  return NextResponse.json({
    message: 'Solicitud recibida correctamente. Se simula el registro seguro en servidor.'
  });
}
