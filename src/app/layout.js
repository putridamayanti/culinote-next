'use client'

import "./globals.css";
import {Provider} from "react-redux";
import RootApp from "layouts/Root";
import store from "store";

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <title>Culinote - Smart Recipe</title>
      </head>
      <body>
      <Provider store={store}>
      <RootApp>
          {children}
        </RootApp>
      </Provider>
      </body>
      </html>
  );
}
