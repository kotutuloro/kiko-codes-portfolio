import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import Projects from "./Projects";
import Section from "./Section";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const modalProps = {
    openModal: () => setShowModal(true),
    setModalContent: setModalContent,
  };
  return (
    <>
      <Modal
        show={showModal}
        close={() => setShowModal(false)}
        content={modalContent}
      />
      <div
        style={{ clipPath: "border-box" }}
        className="mx-auto rounded-3xl border-3 border-neutral-950 md:max-w-screen-md lg:max-w-screen-lg"
      >
        <Header />
        <main>
          <Section id="about" ChildComponent={About} />
          <Section id="experience" ChildComponent={Experience} />
          <Section
            id="projects"
            ChildComponent={Projects}
            childProps={modalProps}
          />
          <Section id="contact" ChildComponent={Contact} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
