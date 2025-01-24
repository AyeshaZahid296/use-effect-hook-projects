import React from "react";
import Counter from "./components/counter.jsx";
import UserList from "./components/UserList.jsx";
import WindowResize from "./components/WindowResize.jsx";
import Timer from "./components/Timer";
import Form from "./components/Form";
import ThemeSwitcher from "./components/ThemeSwitcher";
import OnlineStatus from "./components/OnlineStatus";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">React Landing Page with Tasks</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Counter with Side Effect</h2>
            <Counter />
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Window Resize Listener</h2>
            <WindowResize />
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Timer with Cleanup</h2>
            <Timer />
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Form Input Synchronization</h2>
            <Form />
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">API Data Fetching</h2>
            <UserList />
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Theme Switcher</h2>
            <ThemeSwitcher />
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Online Status Checker</h2>
            <OnlineStatus />
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Debounced Search Input</h2>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
