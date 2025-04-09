import { lazy, Suspense } from "react";
import "./App.css";

//@ts-expect-error - I love TypeScript
const Settings = lazy(() => import("settings/App"));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Settings />
      </Suspense>
    </div>
  );
};

export default App;
