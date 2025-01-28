import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import SettingsMenu from "@/components/settings/SettingsMenu";
import HelpPanel from "@/components/settings/HelpPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("routing");
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      autoAssignment: true,
      workloadThreshold: "80",
      responseTimeout: "15",
      priorityRules: "standard",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Settings saved:", data);
    toast({
      title: "Настройки сохранены",
      description: "Изменения успешно применены",
    });
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-4rem)] gap-6 p-6">
        {/* Левая панель - меню настроек */}
        <SettingsMenu activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Центральная часть - основной контент */}
        <div className="flex-1 space-y-6 overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Настройки оператора</h1>
            <p className="text-muted-foreground">
              Управление системными настройками и конфигурациями
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Настройка маршрутизации запросов</CardTitle>
              <CardDescription>
                Настройте правила распределения входящих запросов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="autoAssignment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Автоматическое распределение
                          </FormLabel>
                          <p className="text-sm text-muted-foreground">
                            Автоматически назначать операторов на входящие запросы
                          </p>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="workloadThreshold"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Порог загрузки оператора (%)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="responseTimeout"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Таймаут ответа (минуты)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="priorityRules"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Правила приоритизации</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите правило" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="standard">Стандартное</SelectItem>
                            <SelectItem value="vip">VIP клиенты</SelectItem>
                            <SelectItem value="urgent">Срочные запросы</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Сохранить настройки</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Правая панель - справка */}
        <HelpPanel section={activeSection} />
      </div>
    </DashboardLayout>
  );
};

export default Settings;