import type { Metadata } from "next";
import "./styles/global.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Link from "next/link";
import ClientLayout from "./ClientLayout";
import 'regenerator-runtime/runtime';
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export const metadata: Metadata = {
  title: "Pradan Research",
  description: "Pradan Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <title>Pradan Research</title> */}
        <link rel="icon" href="/favicon-32x32.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.0/font/bootstrap-icons.css" rel="stylesheet" integrity="sha384-7mYsGfCln9zMJjBdSiMhMJsHlu@1.9.0" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ErrorBoundary errorComponent={Error}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ErrorBoundary>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}


// webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
//   if (!dev) {
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       exclude: /node_modules/,
//       use: {
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env", "@babel/preset-typescript"],
//         },
//       },
//     });
//   } else {
//     const polyfillPath = path.resolve("./polyfills.js");

//     if (
//       config.entry["main.app"] &&
//       !config.entry["main.app"].includes(polyfillPath)
//     ) {
//       config.entry["main.app"].unshift(polyfillPath);
//     }
//   }

//   return config;
// },