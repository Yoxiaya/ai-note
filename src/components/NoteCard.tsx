// app/components/NoteCard.tsx
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function NoteCard() {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                    React 18 新特性解析
                    <div className="text-xs">#前端优化</div>
                </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground line-clamp-3">
                    AI 生成摘要：React 18
                    引入并发渲染机制，通过可中断渲染和自动批处理优化性能...
                </p>
                <Progress value={85} className="mt-2 h-2" />
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground flex justify-between">
                <span>2小时前</span>
                <span>3次提问</span>
            </CardFooter>
        </Card>
    );
}
