import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const KeyMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Среднее время обработки</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#1EAEDB]">2м 30с</div>
          <p className="text-sm text-muted-foreground">-12% с прошлой недели</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Загрузка сотрудников</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#9b87f5]">78%</div>
          <p className="text-sm text-muted-foreground">+5% с прошлой недели</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Коэффициент конверсии</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#ea384c]">32%</div>
          <p className="text-sm text-muted-foreground">+2% с прошлой недели</p>
        </CardContent>
      </Card>
    </div>
  );
};