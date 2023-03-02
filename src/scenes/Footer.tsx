import Logo from "@/assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16  md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="" src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            corrupti dolorum harum vel architecto ullam eaque maxime labore
            soluta, fugit, ab laborum cumque. Doloribus modi laborum repellendus
            impedit, praesentium minus!
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p className="my-5"> Voluptatum recusandae corrupti</p>
          <p className="my-5">nostrum reiciendis ipsam nihil</p>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p className="my-5"> Voluptatum recusandae corrupti</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p className="my-5"> Voluptatum recusandae corrupti</p>
          <p>(333)433-7591</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
