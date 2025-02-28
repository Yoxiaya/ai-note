import "./App.css";

// app/page.tsx
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { NoteCard } from "@/components/NoteCard";
import { ScrollArea } from "@/components/ui/scroll-area";

function App() {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr]">
            <Sidebar />

            <div className="flex flex-col">
                <Header />

                <ScrollArea className="flex-1 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <NoteCard key={i} />
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}
export default App;
