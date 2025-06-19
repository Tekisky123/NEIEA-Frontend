import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { HeartPulse } from "lucide-react";

const donationOptions = [
  {
    title: "One-Time Donation",
    description: "Make a single contribution to support our cause",
    frequency: "once",
    cta: "Donate Once"
  },
  {
    title: "Monthly Donation",
    description: "Set up recurring monthly donations for sustained impact",
    frequency: "monthly",
    cta: "Donate Monthly"
  },
  {
    title: "Quarterly Donation",
    description: "Contribute every quarter for consistent support",
    frequency: "quarterly",
    cta: "Donate Quarterly"
  },
  {
    title: "Annual Donation",
    description: "Make a yearly commitment to our mission",
    frequency: "annually",
    cta: "Donate Annually"
  }
];

const NewDonation = () => {
  const navigate = useNavigate();

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Make a New Donation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {donationOptions.map((option) => (
            <Card key={option.frequency} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                </div>
                <Button
                  onClick={() => navigate(`/donate?frequency=${option.frequency}`)}
                  className="w-full"
                >
                  <HeartPulse className="w-4 h-4 mr-2" />
                  {option.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewDonation;