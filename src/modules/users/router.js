import router from "@/router";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

router.addRoutes([
  {
    path: "/projects",
    name: "projects.projects",
    component: Projects,
    props: false
  },
  {
    path: "/projects/:id",
    name: "projects.project",
    component: Project,
    props: true
  }
]);