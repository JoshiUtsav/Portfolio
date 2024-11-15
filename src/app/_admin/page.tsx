import { Input } from "@/components/ui/input";

const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid w-full max-w-md items-center gap-1.5">
        <Input id="picture" type="file" />
      </div>
    </div>
  );
};

export default AdminDashboard;
