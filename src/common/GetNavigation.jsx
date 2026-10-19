import DashboardIcon from "@mui/icons-material/Dashboard";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
export const GetNavigation = () => [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "organization",
    title: "Organization",
    icon: <CorporateFareIcon />,
  },

  {
    kind: "divider",
  },
  {
    segment: "signin",
    title: "Signin",
    icon: <LoginIcon />,
  },
  {
    segment: "signup",
    title: "Signup",
    icon: <HowToRegIcon />,
  },
];
