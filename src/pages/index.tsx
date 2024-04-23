import { ChatPanel } from "@/components/chat-panel";
import { HistoryPanel } from "@/components/history-panel";
import { MenuPanel } from "@/components/menu-panel";
import { SettingPanel } from "@/components/setting-panel";

export default function Home() {
  return (
    <div className="h-screen flex flex-col pb-6">
      <div className="flex">
        {/* First Column */}
        <MenuPanel />

        {/* Second Column */}
        <HistoryPanel />

        {/* Third Column */}
        <ChatPanel />

        {/* Sidebar settings */}
        <SettingPanel />
      </div>
    </div>
  );
}
