import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";

const IncomingCall = () => {
  const templateAnswers = [
    "Thank you for your call. How may I assist you today?",
    "I understand your concern. Let me help you with that.",
    "Could you please provide more details about your issue?",
    "Let me check that information for you right away.",
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Central Part - Request Details */}
        <Card className="col-span-1 md:col-span-6 p-6">
          <h2 className="text-2xl font-semibold mb-4">Request Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Source:</span>
              <span>Phone Call</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Time:</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
            <div>
              <span className="font-medium">Request:</span>
              <p className="mt-2 text-gray-600">
                Customer inquiry about service availability and pricing
              </p>
            </div>
          </div>
        </Card>

        {/* Right Side - Data Entry */}
        <Card className="col-span-1 md:col-span-6 p-6">
          <h2 className="text-2xl font-semibold mb-4">Client Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input placeholder="Enter client name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input placeholder="Enter phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input placeholder="Enter email address" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Notes</label>
              <Input placeholder="Add additional notes" />
            </div>
          </div>
        </Card>

        {/* Bottom - Template Answers */}
        <Card className="col-span-1 md:col-span-12 p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Responses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templateAnswers.map((answer, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start h-auto py-3 px-4 text-left"
                onClick={() => console.log("Selected template:", answer)}
              >
                {answer}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default IncomingCall;