import FactList from "./FactList";
import CategoryFilter from "./CategoryFilter";
import Loader from "./Loader";

function MainComponent({ facts, isLoading, setCurCategory, setFacts }) {
  return (
    <>
      <main className="main">
        <CategoryFilter setCurCategory={setCurCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
        <a href="https://github.com/sharathnm79" className="footer">
          Sharath N M
        </a>
      </main>
    </>
  );
}

export default MainComponent;
