import { Filter, Clock, MessageSquare } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RequestFilters = () => {
  return (
    <div className="p-4 space-y-6 border-r">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-4 w-4" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3">Channel</h4>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Channels</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="telegram" id="telegram" />
              <Label htmlFor="telegram">Telegram</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="whatsapp" id="whatsapp" />
              <Label htmlFor="whatsapp">WhatsApp</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="phone" />
              <Label htmlFor="phone">Phone</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Status</h4>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="status-all" />
              <Label htmlFor="status-all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new" id="status-new" />
              <Label htmlFor="status-new">New</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-progress" id="status-in-progress" />
              <Label htmlFor="status-in-progress">In Progress</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Time</h4>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="time-all" />
              <Label htmlFor="time-all">All Time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="today" id="time-today" />
              <Label htmlFor="time-today">Today</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="week" id="time-week" />
              <Label htmlFor="time-week">This Week</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default RequestFilters;