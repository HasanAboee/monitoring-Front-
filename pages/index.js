
import { NotificationsProvider } from "@mantine/notifications";
import Login from "../components/Login/Login";

function Home() {
  return (
    <NotificationsProvider>
      <Login/>
      </NotificationsProvider>
  );
}
export default Home;
