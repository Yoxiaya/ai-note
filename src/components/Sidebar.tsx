// app/components/Sidebar.tsx
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
// import { DatePicker } from "@/components/ui/datepicker"; // 需要自行封装或使用第三方

export function Sidebar() {
    return (
        <aside className="hidden w-[240px] flex-col gap-4 border-r bg-muted/40 p-4 md:flex">
            {/* 时间筛选 */}
            <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                    <span className="text-sm font-medium">时间范围</span>
                    <div className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-2">
                    日历
                </CollapsibleContent>
            </Collapsible>

            {/* AI 标签云 */}
            <div className="space-y-2">
                <h3 className="text-sm font-medium">AI 分类</h3>
                <div className="flex flex-wrap gap-2">
                    {["React", "性能优化", "会议记录"].map((tag) => (
                        <div
                            key={tag}
                            className="cursor-pointer hover:bg-primary/10"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
