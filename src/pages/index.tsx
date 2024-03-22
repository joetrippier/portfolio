import * as React from "react";
import { withPrefix, type HeadFC, type PageProps } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import logo from "../images/logo.png";
import Button from "../components/button";
import FormInput from "../components/formInput";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header></Header>

      <section
        id="frame"
        className="w-full h-screen flex flex-col justify-center items-center text-center mb-6"
      >
        <img
          className="z-50 w-20 h-20 rounded-full border-solid border-2 border-orange-700"
          src={logo}
        />
        <h1 className="text-4xl z-50">Joe Trippier</h1>
        <p className="z-50">
          Fullstack software engineer based in the North West UK
        </p>
      </section>

      <main className="container mx-auto">
        <section className=" flex flex-col justify-center items-center text-center m-10 md:m-24">
          <h1 className="text-4xl mb-3">About</h1>
          <p>
            Hi 👋, my name is Joe and I've been working with software for over
            ten years. I like to work on front end and back end development and
            have spent most of my time using C# and .Net to build websites. For
            the frontend I like to use React, Vue, AngularJs and for a backend I
            like to use .Net or Node.
          </p>
        </section>

        <section className=" flex flex-col justify-center items-center text-center m-10 md:m-24">
          <h1 className="text-4xl mb-3">Links</h1>
          <p className="mb-3">
            A list of helpful places to visit, so I can remember them
          </p>
          <a className="underline" href="https://github.com/joetrippier">
            Github
          </a>
          <a className="underline" href="https://codepen.io/tripex99">
            CodePen
          </a>
          <a
            className="underline"
            href="https://www.canva.com/colors/color-wheel/"
          >
            Colour wheel
          </a>
        </section>

        <section className="flex flex-col justify-center items-center text-center m-10 md:m-24">
          <h1 className="text-4xl mb-3">Contact</h1>
          <p className="m-1">
            If you want to get in touch about building something or just to say
            hi then drop me a message.
          </p>
          <form
            name="contact"
            noValidate={false}
            className="flex flex-col border-solid border-2 rounded border-orange-700 p-5 w-96 text-left"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormInput>
              <label>Your Name</label>
              <input
                className="text-black"
                type="text"
                maxLength={100}
                required
              />
            </FormInput>
            <FormInput>
              <label>Your Email</label>
              <input className="text-black" type="email" required />
            </FormInput>
            <FormInput>
              <label>Subject</label>
              <input
                className="text-black"
                type="text"
                maxLength={150}
                required
              />
            </FormInput>
            <FormInput>
              <label>Message</label>
              <textarea
                className="text-black"
                rows={5}
                maxLength={500}
                required
              />
            </FormInput>

            <FormInput>
              <Button text="Submit"></Button>
            </FormInput>
          </form>
        </section>
      </main>
      <Footer></Footer>
      <script src={withPrefix("main.js")} type="text/javascript" />
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
