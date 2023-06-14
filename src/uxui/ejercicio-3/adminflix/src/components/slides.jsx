import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.js";
import { useEffect } from "react";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import Presentation from "./presentation.jsx";

function Slides() {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Markdown],
      autoAnimateEasing: "ease",
      autoAnimateDuration: 1,
      hash: true,
      controls: true,
      progress: true,
    });
    deck.initialize();
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <Presentation />
      </div>
    </div>
  );
}

export default Slides;
