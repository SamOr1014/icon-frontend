import { Button } from "@/components/Button";
import { MenuDropdown } from "./MenuDropdown";

export const DashboardHeader = () => {
  return (
    <>
      <MenuDropdown />
      <Button className="btn btn-ghost">Logout</Button>
    </>
  );
};
