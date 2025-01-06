import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
  secret: process.env.JWT_SECRET ?? "JWT_SECRET_Wgskb2qY4EmeqQc_VQ7aVg",
};

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
