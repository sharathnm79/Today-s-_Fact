import "./style.css";
import supabase from "./supabase";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import MainComponent from "./components/MainComponent";
import { useEffect, useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [curCategory, setCurCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");

        if (curCategory !== "all") query = query.eq("category", curCategory);

        const { data: facts, error } = await query
          .order("voteInteresting", { ascending: false })
          .limit(1000);
        if (!error) {
          setFacts(facts);
          // console.log(facts);
          setIsLoading(false);
        } else {
          alert("There was error getting data");
        }
      }
      getFacts();
    },
    [curCategory]
  );

  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <MainComponent
        setFacts={setFacts}
        facts={facts}
        isLoading={isLoading}
        setCurCategory={setCurCategory}
      />
    </>
  );
};

export default App;
