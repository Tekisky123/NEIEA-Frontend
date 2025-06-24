import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Toaster, toast } from "sonner";
import {
  LogOut,
  BookOpen,
  Users,
  PlusCircle,
  Shield,
  User,
  Settings,
  BarChart2,
  Bell,
  Search,
  UserPlus,
  Key,
} from "lucide-react";

// Components
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sections
import CoursesSection from "./CoursesSection";
import DonorsSection from "./DonorsSection";
import NewCourse from "./NewCourse";
import SecuritySection from "./SecuritySection";
import ManageAdmins from "./ManageAdmins";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("courses");
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!user) {
      //   navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="">
                <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm font-bold text-gray-900">Welcome {user.fullName || "Admin"}</p>
              </div>

              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                      
                        <AvatarFallback>
                          {user.firstName?.charAt(0)}
                          {user.lastName?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.fullName}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      

          {/* Main Content Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-5 h-auto mb-6 bg-white">
              <TabsTrigger
                value="courses"
                className="py-3 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="new" className="py-3 flex items-center gap-2">
                <PlusCircle className="w-4 h-4" />
                New Course
              </TabsTrigger>
              <TabsTrigger
                value="donors"
                className="py-3 flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Donors
              </TabsTrigger>
              <TabsTrigger
                value="admins"
                className="py-3 flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Manage Admins
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="py-3 flex items-center gap-2"
              >
                <Key className="w-4 h-4" />
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="bg-white rounded-lg shadow">
              <CoursesSection searchQuery={searchQuery} />
            </TabsContent>
            <TabsContent value="donors" className="bg-white rounded-lg shadow">
              <DonorsSection searchQuery={searchQuery} />
            </TabsContent>
            <TabsContent value="new" className="bg-white rounded-lg shadow">
              <NewCourse />
            </TabsContent>
            <TabsContent value="admins" className="bg-white rounded-lg shadow">
              <ManageAdmins />
            </TabsContent>
            <TabsContent
              value="security"
              className="bg-white rounded-lg shadow"
            >
              <SecuritySection />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
