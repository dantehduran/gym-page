import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (page: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href="#contactus"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
