import { Routes, Route } from "react-router-dom";
import { Home, About, Privacy, Terms, NotFound, SignUp, Api } from "./Index";
import useScrollToHash from "./useScrollToHash";

const Router = () => {
  useScrollToHash();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="tos" element={<Terms />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="api-key" element={<Api />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
