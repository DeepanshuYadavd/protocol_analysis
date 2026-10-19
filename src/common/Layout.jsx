import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";
import { GetNavigation } from "./GetNavigation";

function Layout() {
  const NAVIGATION = GetNavigation();
  
  return (
    <AppProvider
      navigation={NAVIGATION}
      // router={router}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}

export default Layout;
