import { useState } from "react";
import supabase from "../supabase.js";
import { CATEGORIES } from "../utils/data.js";

function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.voteInteresting + fact.voteMindblowing < fact.voteFalse;

  async function handleVote(votes) {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [votes]: fact[votes] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);

    if (!error) {
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
    }
  }

  return (
    <li key={fact.id} className="fact">
      <p>
        {isDisputed ? <span className="disputed">[⛔️ DISPUTED]</span> : null}
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}>
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("voteInteresting")}
          disabled={isUpdating}>
          👍 {fact.voteInteresting}
        </button>
        <button
          onClick={() => handleVote("voteMindblowing")}
          disabled={isUpdating}>
          🤯 {fact.voteMindblowing}
        </button>
        <button onClick={() => handleVote("voteFalse")} disabled={isUpdating}>
          ⛔️ {fact.voteFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
