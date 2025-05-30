// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useMatches,
} from "@tanstack/react-router";

import appCss from "@/styles/app.css?url";

function DynamicHead() {
  const matches = useMatches();
  const pathname = matches[matches.length - 1]?.pathname;

  let title = "Zenq";
  switch (true) {
    case pathname?.startsWith("/register"):
      title = "Registrieren";
      break;
    case pathname?.startsWith("/dashboard"):
      title = "Dashboard";
      break;
    case pathname?.startsWith("/reset-password"):
      title = "Passwort zurücksetzen";
      break;
    case pathname?.startsWith("/login"):
      title = "Anmelden";
      break;
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="stylesheet" href={appCss} suppressHydrationWarning />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
        suppressHydrationWarning: true,
      },
      {
        rel: "icon",
        href: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
        <DynamicHead />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
