import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  Divider,
} from "@nextui-org/react";
import { IPLogo } from "./IPLogo";
import { useState } from "react";
import { DarkMode } from "./DarkMode";
import "./styles.scss";

export default function App(props) {
  const {
    home,
    homeRef,
    about,
    aboutRef,
    services,
    servicesRef,
    contact,
    contactRef,
    gallery,
    galleryRef,
    languageSelect,
    logoRef,
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="60px"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand className="ml-4">
          <IPLogo linkRef={logoRef} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href={homeRef} className="text-2xl" isBlock>
            {home}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={aboutRef} className="text-2xl" isBlock>
            {about}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href={servicesRef}
            className="text-2xl"
            isBlock
          >
            {services}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href={galleryRef}
            className="text-2xl"
            isBlock
          >
            {gallery}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            size="sm"
            href={contactRef}
            variant="solid"
            className="text-2xl"
          >
            {contact}
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">{languageSelect}</NavbarItem>
        <NavbarItem className="mt-2">
          <DarkMode />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="md:hidden gap-8 px-10 py-8">
        <NavbarMenuItem className="mt-4">
          <Link color="foreground" href={homeRef} className="text-3xl w-full">
            {home}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href={aboutRef} className="text-3xl w-full">
            {about}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href={servicesRef}
            className="text-3xl w-full"
          >
            {services}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href={galleryRef}
            className="text-3xl w-full"
          >
            {gallery}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href={contactRef}
            className="text-3xl w-full"
          >
            {contact}
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarItem>{languageSelect}</NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
