import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
    User,
    Home,
    Briefcase,
    Code2,
    Mail,
    Github,
    Linkedin,
    Monitor,
    Moon,
    Sun,
    Laptop
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { projects } from "@/data/projects";

export function CommandMenu() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { setTheme } = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        const openMenu = () => setOpen(true);

        document.addEventListener("keydown", down);
        window.addEventListener("open-command-menu", openMenu);
        return () => {
            document.removeEventListener("keydown", down);
            window.removeEventListener("open-command-menu", openMenu);
        };
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 overflow-hidden shadow-2xl bg-popover/80 backdrop-blur-xl text-popover-foreground border-border sm:max-w-[550px]">
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-item]]:px-4 [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:h-12 [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:flex [&_[cmdk-item]]:items-center [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-14 [&_[cmdk-item]]:aria-selected:bg-primary/20 [&_[cmdk-item]]:aria-selected:text-accent-foreground [&_[cmdk-item]]:transition-colors">
                    <div className="flex items-center border-b px-4" cmdk-input-wrapper="">
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <Command.List className="max-h-[400px] overflow-y-auto overflow-x-hidden p-2">
                        <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>

                        <Command.Group heading="Navigation">
                            <Command.Item onSelect={() => runCommand(() => scrollToSection("home"))}>
                                <Home className="mr-3 h-4 w-4" />
                                <span>Home</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => scrollToSection("about"))}>
                                <User className="mr-3 h-4 w-4" />
                                <span>About</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => scrollToSection("projects"))}>
                                <Code2 className="mr-3 h-4 w-4" />
                                <span>Projects</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => scrollToSection("experience"))}>
                                <Briefcase className="mr-3 h-4 w-4" />
                                <span>Experience</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => scrollToSection("contact"))}>
                                <Mail className="mr-3 h-4 w-4" />
                                <span>Contact</span>
                            </Command.Item>
                        </Command.Group>

                        <Command.Group heading="Projects">
                            {projects.map((project) => (
                                <Command.Item
                                    key={project.title}
                                    onSelect={() => runCommand(() => window.open(project.live || project.github, "_blank"))}
                                    value={project.title}
                                >
                                    <Monitor className="mr-3 h-4 w-4" />
                                    <span>{project.title}</span>
                                </Command.Item>
                            ))}
                        </Command.Group>

                        <Command.Group heading="Social">
                            <Command.Item onSelect={() => runCommand(() => window.open("https://github.com/CodeByAtharva", "_blank"))}>
                                <Github className="mr-3 h-4 w-4" />
                                <span>GitHub</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/atharva-kamble-10685928b", "_blank"))}>
                                <Linkedin className="mr-3 h-4 w-4" />
                                <span>LinkedIn</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>

                    <div className="border-t p-2 px-4 text-xs text-muted-foreground flex justify-between items-center bg-muted/20">
                        <span>Use arrow keys to navigate</span>
                        <div className="flex gap-1">
                            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                <span className="text-xs">↵</span>
                            </kbd>
                            <span>to select</span>
                        </div>
                    </div>
                </Command>
            </DialogContent>
        </Dialog>
    );
}
