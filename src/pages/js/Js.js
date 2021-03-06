import React, { useRef, useEffect } from "react";
import "./js.css";

export default function Js() {
  const textBox1 = useRef(null);
  const textBox2 = useRef(null);

  useEffect(() => {
    const phrase1 = "Hello";
    const phrase2 = "Universe";
    let i = 0;
    let j = 0;
    let text1 = [];
    let text2 = [];

    function typePhrase1() {
      if (i < phrase1.length) {
        text1.push(phrase1[i]);
        i++;
      }
      textBox1.current.innerHTML = text1.join("");
      setTimeout(typePhrase1, 250);
    }
    typePhrase1();

    function typePhrase2() {
      if (j < phrase2.length) {
        text2.push(phrase2[j]);
        j++;
      }
      textBox2.current.innerHTML = text2.join("");
      setTimeout(typePhrase2, 250);
    }
    setTimeout(function () {
      typePhrase2();
    }, 1250);
  }, []);

  return (
    <div className="page-updating">
      <h1>JavaScript Tutorials</h1>
      <p>This section is currently being updated. Thanks for your patience.</p>
      <div className="typed-text-box">
        TEXT BOX 1<h2 className="typed-text" ref={textBox1}></h2>
      </div>
      <div className="typed-text-box">
        TEXT BOX 2<h2 className="typed-text" ref={textBox2}></h2>
      </div>
    </div>
  );
}
