import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import logo from "../images/logo.png";
import Button from "../components/button";
import FormInput from "../components/formInput";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header></Header>
      <main className="">
        <div
          className="w-screen h-screen absolute -z-50"
          style={{
            background: "linear-gradient(45deg, #0f172a, #4f474a)",
            overflow: "hidden",
          }}
        >
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </div>
        {/* <StaticImage
          className="w-screen h-screen absolute -z-50"
          src="../images/background.png"
          alt=""
          layout="fullWidth"
        ></StaticImage> */}
        <section className="w-screen h-screen flex flex-col justify-center items-center text-center mb-6">
          <img
            className="w-20 h-20 rounded-full border-solid border-2 border-orange-700"
            src={logo}
          />
          <h1 className="text-4xl">Joe Trippier</h1>
          <p>Fullstack software engineer based in the North West UK</p>
        </section>

        <section className="w-screen flex flex-col justify-center items-center mb-8">
          <h1 className="text-4xl mb-3">About</h1>
          <p>Lorem ipsum</p>
        </section>

        <section className="w-screen flex flex-col justify-center items-center mb-8">
          <h1 className="text-4xl mb-3">Links</h1>
          <a className="underline" href="https://github.com/joetrippier">
            Github
          </a>
          <a className="underline" href="https://codepen.io/tripex99">
            CodePen
          </a>
        </section>

        <section className="w-screen flex flex-col justify-center items-center mb-8">
          <h1 className="text-4xl mb-3">Contact</h1>
          <p className="m-1">
            If you want to get in touch about building something or just to say
            hi then drop me a message.
          </p>
          <form className="flex flex-col border-solid border-2 rounded border-orange-700 p-5 w-96">
            <FormInput>
              <label>Name</label>
              <input type="text" maxLength={100} />
            </FormInput>
            <FormInput>
              <label>Email</label>
              <input type="email" />
            </FormInput>
            <FormInput>
              <label>Subject</label>
              <input type="text" maxLength={100} />
            </FormInput>
            <FormInput>
              <label>Message</label>
              <input type="text" maxLength={500} />
            </FormInput>

            <FormInput>
              <Button text="Submit"></Button>
            </FormInput>
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <body className="text-gray-100 bg-slate-900 font-mono" />
      <title>Joe Trippier</title>
    </>
  );
};

const Bar = () => {
  const horixontalChunks = [0, 20, 40, 60, 80];
  const verticalChunks = [0, 20, 40, 60, 80];
  const randx = Math.floor(Math.random() * horixontalChunks.length);
  const randy = Math.floor(Math.random() * verticalChunks.length);
  return (
    <div
      className="absolute -z-10"
      style={{
        background: "#0f172a",
        width: "20%",
        height: "calc(100vh/5)",
        transform: `translate(${horixontalChunks[randx]}vw, ${verticalChunks[randy]}vh)`,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    ></div>
  );
};
