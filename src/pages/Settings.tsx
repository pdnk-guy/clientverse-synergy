import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import SettingsMenu from "@/components/settings/SettingsMenu";
import HelpPanel from "@/components/settings/HelpPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import * as z from "zod";

// Define the form schema
const formSchema = z.object({
  autoAssignment: z.boolean(),
  workloadThreshold: z.string(),
  responseTimeout: z.string(),
  priorityRules: z.string(),
  defaultTemplate: z.string().optional(),
  role: z.string().optional(),
  crmApiKey: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Settings = () => {
  const [activeSection, setActiveSection] = useState("routing");
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    defaultValues: {
      autoAssignment: true,
      workloadThreshold: "80",
      responseTimeout: "15",
      priorityRules: "standard",
      defaultTemplate: "",
      role: "",
      crmApiKey: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Settings saved:", data);
    toast({
      title: "Настройки сохранены",
      description: "Изменения успешно применены",
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "routing":
        return (
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
        );
      case "scripts":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Настройка сценариев</CardTitle>
              <CardDescription>
                Управление автоматическими сценариями и шаблонами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-6">
                  <FormField
                    control={form.control}
                    name="defaultTemplate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Шаблон ответа по умолчанию</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Введите шаблон" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Сохранить сценарии</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        );
      case "access":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Управление доступом</CardTitle>
              <CardDescription>
                Настройка прав доступа для сотрудников
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-6">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Роль пользователя</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите роль" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="admin">Администратор</SelectItem>
                            <SelectItem value="operator">Оператор</SelectItem>
                            <SelectItem value="supervisor">Супервайзер</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Сохранить права доступа</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        );
      case "integrations":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Интеграции</CardTitle>
              <CardDescription>
                Настройка интеграций с внешними системами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-6">
                  <FormField
                    control={form.control}
                    name="crmApiKey"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>API ключ CRM</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Введите API ключ" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Сохранить интеграции</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        );
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Выберите раздел настроек</CardTitle>
              <CardDescription>
                Выберите раздел настроек в меню слева для его конфигурации
              </CardDescription>
            </CardHeader>
          </Card>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-4rem)] gap-6 p-6">
        <SettingsMenu activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1 space-y-6 overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Настройки оператора</h1>
            <p className="text-muted-foreground">
              Управление системными настройками и конфигурациями
            </p>
          </div>
          {renderContent()}
        </div>
        <HelpPanel section={activeSection} />
      </div>
    </DashboardLayout>
  );
};

export default Settings;