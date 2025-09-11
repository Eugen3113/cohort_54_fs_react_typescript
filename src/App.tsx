import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

// Pages
import Home from "pages/EmployeeApp/Home/Home";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import About from "pages/EmployeeApp/About/About";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Login from "pages/EmployeeApp/Login/Login"; // или LogIn, если ты решил так
import Apple from "pages/EmployeeApp/Clients/Apple/Apple";
import Facebook from "pages/EmployeeApp/Clients/Facebook/Facebook";
import Google from "pages/EmployeeApp/Clients/Google/Google";
import Amazon from "pages/EmployeeApp/Clients/Amazon/Amazon";
import { ROUTES } from "constants/routes";

// Components
import Layout from "components/Layout/Layout";

// Lessons
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
import Lesson_13 from "lessons/lesson_13/Lesson";

// Homeworks
import Homework_06 from "homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_11 from "homeworks/Homework_11/Homework_11";

// Consultation
import Sandwich from "./consultation/Sandwich/Sandwich";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.CLIENTS} element={<Clients />} />
          <Route path={ROUTES.APPLE} element={<Apple />} />
          <Route path={ROUTES.FACEBOOK} element={<Facebook />} />
          <Route path={ROUTES.GOOGLE} element={<Google />} />
          <Route path="/clients/amazon" element={<Amazon />} />
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
        </Routes>
      </Layout>

      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
      <Lesson_13 />

      {/* Homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_11 /> */}

      {/* consultations */}
      {/* <Sandwich /> */}
    </BrowserRouter>
  );
}

export default App;

//?  <Route path="*" element="Page Not Found" />       (строка 46),
//?   все пути непрописанные выше , выдадут  "Page Not Found"
