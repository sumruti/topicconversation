import Dashboard from "views/Dashboard.jsx";
import Login from "views/auth/Login.jsx";
import SignUp from "views/auth/SignUp.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import AddTopic from "views/Topic.jsx";
import AddLesson from "views/Lesson.jsx";
import ViewLessons from "views/ViewLesson.jsx";
import AddSentence from"views/Sentence.jsx";

var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-user-run",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: "nc-icon nc-user-run",
    component: SignUp,
    layout: "/auth"
  },
  {
    path: "/topics",
    name: "Topics",
    icon: "fa fa-plus-circle",
    component: AddTopic,
    layout: "/admin"
  },
  {
    path: "/view-lessons",
    name: "View Lessons",
    icon: "fa fa-plus-circle",
    component: ViewLessons,
    layout: "/admin"
  },
  {
    path: "/add-sentence",
    name: "Add Sentence",
    icon: "fa fa-plus-circle",
    component: AddSentence,
    layout: "/admin"
  },
  {
    path: "/lessons",
    name: "Lesson",
    icon: "fa fa-plus-circle",
    component: AddLesson,
    layout: "/admin"
  },
  {
    path: "/travel",
    name: "Travel",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/society",
    name: "Society",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/objects",
    name: "Objects",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/nature",
    name: "Nature",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/human",
    name: "Human",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/food-and-meals",
    name: "Food And Meals",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/description",
    name: "Desciption",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "fa fa-folder",
    component: Dashboard,
    layout: "/admin"
  }
];
export default routes;
