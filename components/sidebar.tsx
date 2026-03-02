import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0F7B0F] text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-green-700">
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 rounded-lg shadow-md">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-wide">
            Inventory IFSP
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="text-xs uppercase tracking-wider text-green-200 mb-3">
          Menu
        </p>

        {navigation.map((item, key) => {
          const IconComponent = item.icon;
          const isActive = currentPath === item.href;

          return (
            <Link
              key={key}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${isActive
                  ? "bg-purple-600 text-white shadow-lg"
                  : "hover:bg-green-800"
                }`}
            >
              <IconComponent className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-6 py-4 border-t border-green-700 bg-[#0F7B0F]">
        <UserButton showUserInfo />
      </div>
    </aside>
  );
}