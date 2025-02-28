// app/components/Header.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sparkles } from "lucide-react"; // AI 状态图标

export function Header() {
    return (
        <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            {/* 搜索栏 */}
            <div className="relative flex-1">
                <Input
                    placeholder="搜索笔记或询问 AI..."
                    className="pl-8 pr-4"
                />
                <Sparkles className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            </div>

            {/* 新建按钮 */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="default" className="gap-1">
                        新建 +
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex gap-2">
                        <div className="h-4 w-4" />
                        空白笔记
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="h-4 w-4" />
                        从模板创建
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* 用户状态 */}
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">本地模型</span>
            </div>
        </header>
    );
}
