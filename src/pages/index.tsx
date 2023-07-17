import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import logo from "../images/logo.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header></Header>
      <main className="">
        <section className="w-screen h-screen flex flex-col justify-center items-center">
          <img
            className="w-20 h-20 rounded-full border-solid border-2 border-orange-700"
            src={logo}
          />
          <h1>Joe Trippier</h1>
          <p>Fullstack software engineer based in the North West UK</p>
        </section>

        <section className="w-screen flex flex-col justify-center items-center">
          <h1>About</h1>
          <p>Lorem ipsum</p>
        </section>

        <section className="w-screen flex flex-col justify-center items-center">
          <h1>Links</h1>
          <a href="https://github.com/joetrippier">Github</a>
          <a href="https://codepen.io/tripex99">CodePen</a>
        </section>

        <section className="w-screen flex flex-col justify-center items-center">
          <h1>Contact</h1>
          <form>
            <label>Name</label>
            <input type="text" maxLength={100}/>
            <label>Email</label>
            <input type="email"/>
            <label>Subject</label>
            <input type="text" maxLength={100}/>
            <label>Message</label>
            <input type="text" maxLength={500}/>
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
