import React from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import { cookies } from "next/headers";
import clsx from "clsx";

import AnimationContainer from "@/components/AnimationContainer";
import {
  BLOG_TITLE,
  LIGHT_TOKENS,
  DARK_TOKENS,
  THEME,
  THEME_COOKIE_KEY,
} from "@/constants";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata = {
  title: {
    template: `%s • ${BLOG_TITLE}`,
    default: BLOG_TITLE,
  },
  description: "A wonderful blog about JavaScript",
};

function RootLayout({ children }) {
  const savedTheme = cookies().get(THEME_COOKIE_KEY);
  const theme = savedTheme?.value || THEME.LIGHT;

  return (
    <AnimationContainer>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={theme === THEME.LIGHT ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header initialTheme={theme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AnimationContainer>
  );
}

export default RootLayout;
