// Empty layout with index component to have nesting below "/". This allows for a easily set common error page
import { Outlet } from "react-router-dom";
const layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default layout;
