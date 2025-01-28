const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between p-4 border-b bg-background">
        <h1 className="text-2xl font-bold">Communication Hub</h1>
      </header>
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;