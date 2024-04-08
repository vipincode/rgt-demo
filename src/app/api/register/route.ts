import prisma from '@/config/prisma';
import { NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: 'Both fields are required',
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: await bcrypt.hash(password, 10),
      },
    });

    const { password: hashedPassword, ...result } = user;
    return NextResponse.json({ result }, { status: 201 });

    // ERROR
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Something went wrong while trying to register',
        result: error,
      },
      { status: 500 }
    );
  }
}
