import { SMTP_USER, SMTP_PASS } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";

import nodemailer from "nodemailer";
export const POST: RequestHandler = async ({ request }: any) => {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: body.email,
    to: "yourmail@gmail.com",
    subject: "Khách hàng đăng ký Diamond Boulevard",
    html: `
      <h2>Thông tin khách hàng</h2>
      <p><b>Họ tên:</b> ${body.name}</p>
      <p><b>SĐT:</b> ${body.phone}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Loại căn:</b> ${body.apartmentType}</p>
      <p><b>Nội dung:</b> ${body.message}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }));
};
