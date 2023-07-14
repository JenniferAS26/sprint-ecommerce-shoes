import Home from "../pages/Home";
import Header from "../components/Header";
import Detail from "../pages/Detail";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import ModalNavbar from "../components/ModalNavbar";

const routes = {
  '/': Home,
  '/:id': Detail
}

const router = async () => {
  const header = null || document.querySelector('#header');
  const content = null || document.querySelector('#content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
}

export default router;