import React from "react";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export default async function POST(request) {
  const body = await request.json();
  const {
    email, name, password
  } = body;

  //provided security
  const hashPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data:{
        email,
        name,
        hashPassword
    }
  })

  return NextResponse.json(user);
}
