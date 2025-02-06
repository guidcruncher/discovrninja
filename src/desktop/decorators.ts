import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Desktop = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const desktop = request.cookies.desktop;
    let value = {
      screen: { w: 1500, h: 800 },
      window: { w: 1500, h: 800 },
      breakpoint: "x-large",
    };
    if (desktop) {
      value = JSON.parse(desktop);
    }
    return value;
  },
);
