import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings2, Users, MessageSquare, Clock } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Настройки оператора</h1>
          <p className="text-muted-foreground">
            Управление системными настройками и конфигурациями.
          </p>
        </div>

        <Tabs defaultValue="routing" className="space-y-4">
          <TabsList>
            <TabsTrigger value="routing">Маршрутизация запросов</TabsTrigger>
            <TabsTrigger value="preferences">Настройки клиентов</TabsTrigger>
            <TabsTrigger value="access">Управление доступом</TabsTrigger>
            <TabsTrigger value="automation">Сценарии автоматизации</TabsTrigger>
          </TabsList>

          <TabsContent value="routing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Настройка маршрутизации запросов</CardTitle>
                <CardDescription>
                  Настройка распределения входящих запросов по отделам и сотрудникам.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <p className="text-sm text-muted-foreground">Настройте правила и предпочтения маршрутизации здесь.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Настройки клиентов</CardTitle>
                <CardDescription>
                  Управление настройками коммуникации и взаимодействия с клиентами.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <p className="text-sm text-muted-foreground">Настройте предпочтения коммуникации и расписания клиентов.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Управление доступом сотрудников</CardTitle>
                <CardDescription>
                  Контроль уровней доступа и разрешений сотрудников.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <p className="text-sm text-muted-foreground">Управляйте ролями и разрешениями сотрудников здесь.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Сценарии автоматизации</CardTitle>
                <CardDescription>
                  Настройка автоматических ответов и планирования.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <p className="text-sm text-muted-foreground">Настройте шаблоны ответов и автоматическое расписание.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;