import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container contact-card-wrapper py-5">
      <section
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-10 column off-set">
            <div className="card">
              <h2 className="headerTwo text-center py-5">
                <b>What is pseudocode and how does it help with programming</b>
              </h2>
              <br />
              <br />
              <img
                src="/IMG/frustrated.jpeg"
                className="square profilePic card-img-top"
                alt="frustration"
              />
              <br />
              <br />
              <br />
              <p className="mainParagraph">
                According, to an article written by
                <a href="https://www.freecodecamp.org/news/author/ubahthebuilder/">
                  Kingsley Ubah
                </a>
                on
                <a href="https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/">
                  freecodecamp
                </a>
                "Pseudocode literally means ‘fake code’. It is an informal and
                contrived way of writing programs in which you represent the
                sequence of actions and instructions (aka algorithms) in a form
                that humans can easily understand."
                <br />
                <br />
                As the article states, pseudocode is a process of converting a
                program's objectives into a more understandable, natural
                language format. It involves analyzing the problem at hand and
                determining the necessary steps to solve it. <br />
                <br />
                When writing pseudocode I like to break it up into components:
              </p>
              <ul>
                <li>
                  What is the objective of this program:
                  <br />
                </li>
                <li className="example">
                  For example- what does this program need to do.
                </li>
                <br />
                <li>
                  What variables and/or state will I need for this program:
                  <br />
                </li>
                <li className="example">
                  For example- show location or show who’s turn it is.
                </li>
                <br />
                <li>
                  {" "}
                  What functions does the program need to performed:
                  <br />
                </li>
                <li className="example">
                  For example- covert currencies or go from page to page.
                </li>
                <br />
                <li>
                  What procedures are required for the program:
                  <br />
                </li>
                <li className="example">
                  For example- add buttons or add a counter or hide this element
                  till something happens.
                </li>
                <br />
              </ul>
              <p />
              <p className="bottomParagraph">
                Pseudocoding the steps before writing any code will save you
                time when it comes to coding and help with debugging.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;


// import "./App.css";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";

// function App() {
//   return (
//     <div className="container-fluid contact-card-wrapper py-5">
//       <section className="bg-gradient">
//         <div className="row d-flex justify-content-center align-items-center">
//           <div className="col-lg-6 col-md-8 col-sm-10 column">
//             <div className="card">
//               <h2 className="headerTwo text-center py-5">
//                 <b>What is pseudocode and how does it help with programming</b>
//               </h2>
//               <img
//                 src="/IMG/frustrated.jpeg"
//                 className="img-fluid profilePic card-img-top"
//                 alt="frustration"
//               />
//               <p className="mainParagraph">
//                 According to an article written by{" "}
//                 <a href="https://www.freecodecamp.org/news/author/ubahthebuilder/">
//                   Kingsley Ubah
//                 </a>{" "}
//                 on{" "}
//                 <a href="https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/">
//                   freecodecamp
//                 </a>
//                 , "Pseudocode literally means ‘fake code’. It is an informal and
//                 contrived way of writing programs in which you represent the
//                 sequence of actions and instructions (aka algorithms) in a form
//                 that humans can easily understand."
//               </p>
//               <p className="mainParagraph">
//                 As the article states, pseudocode is a process of converting a
//                 program's objectives into a more understandable, natural
//                 language format. It involves analyzing the problem at hand and
//                 determining the necessary steps to solve it.
//               </p>
//               <h3>
//                 When writing pseudocode I like to break it up into components:
//               </h3>
//               <ul>
//                 <li>
//                   What is the objective of this program?
//                   <br />
//                   <span className="example">
//                     For example, what does this program need to do?
//                   </span>
//                 </li>
//                 <li>
//                   What variables and/or state will I need for this program?
//                   <br />
//                   <span className="example">
//                     For example, show location or show who's turn it is.
//                   </span>
//                 </li>
//                 <li>
//                   What functions does the program need to perform?
//                   <br />
//                   <span className="example">
//                     For example, convert currencies or go from page to page.
//                   </span>
//                 </li>
//                 <li>
//                   What procedures are required for the program?
//                   <br />
//                   <span className="example">
//                     For example, add buttons or add a counter or hide this
//                     element till something happens.
//                   </span>
//                 </li>
//               </ul>
//               <p className="bottomParagraph">
//                 Pseudocoding the steps before writing any code will save you
//                 time when it comes to coding and help with debugging.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;
