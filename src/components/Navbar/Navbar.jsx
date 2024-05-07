import { myImage } from "../Common/myImage";
import {
  Menu,
  Search,
} from "lucide-react";
// import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import 'primeicons/primeicons.css';


export default function Dashboard() {
  return (
    <div className="flex justify-center max-sm:px-5">
      <header className="sticky top-0 flex md:w-[650px] w-full items-center h-14 gap-4 px-4 mt-5 border-b rounded-full border-zinc-700/50 bg-zinc-800/40 sm:px-12 md:px-6 mx-auto">
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
            {/* <Avatar className="">
                <AvatarImage src={myImage} />
                <AvatarFallback>AB</AvatarFallback>
            </Avatar> */}
            <NavLink
            to="/"
            
            className="transition-colors text-zinc-400 hover:text-foreground"
          >
            <div className="flex items-center gap-2">
              <i className="pi pi-home"></i>
              <h1 className="hidden md:block">Home</h1>
            </div>
          </NavLink>
        </div>
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/* <NavLink
            to="/about" 
            
            className="transition-colors text-zinc-400 hover:text-foreground"
          >
            <div className="flex items-center gap-2">
              <i className="pi pi-user"></i>
              <h1>About</h1>
            </div>
          </NavLink> */}
          <NavLink
            to="/projects" 
            
            className="transition-colors text-zinc-400 hover:text-foreground"
          >
            <div className="flex items-center gap-2">
              <i className="pi pi-folder"></i>
              <h1>Projects</h1>
            </div>
          </NavLink>
          <NavLink
            to="/skills" 
            
            className="transition-colors text-zinc-400 hover:text-foreground"
          >
            <div className="flex items-center gap-2">
              <i className="pi pi-star-fill"></i>
              <h1>Skills</h1>
            </div>
          </NavLink>
          <NavLink
            to="/contact" 
            
            className="transition-colors text-zinc-400 hover:text-foreground"
          >
           <div className="flex items-center gap-2">
              <i className="pi pi-envelope"></i>
              <h1>Contact</h1>
            </div>
          </NavLink>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="transition duration-150 ease-in bg-transparent shrink-0 md:hidden hover:bg-zinc-700"
            >
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-800">
            <nav className="grid gap-6 text-lg font-medium">
              {/* <NavLink 
                to="/about"  
                className="hover:text-foreground">
                About
              </NavLink> */}
              <NavLink
                to="/skills" 
                className="text-zinc-400 hover:text-foreground"
              >
                Skills
              </NavLink>
              <NavLink
                to="/projects" 
                className="text-zinc-400 hover:text-foreground"
              >
                Project
              </NavLink>
              <NavLink
                to="/contact" 
                className="text-zinc-400 hover:text-foreground"
              >
                Contact
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
