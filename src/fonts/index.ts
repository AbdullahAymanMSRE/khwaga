import localFont from "next/font/local";

export const zain = localFont({
  variable: "--zain-font",
  src: [
    {
      path: "./Zain/Zain-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Zain/Zain-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Zain/Zain-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Zain/Zain-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Zain/Zain-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});
