import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Eye, DollarSign } from "lucide-react";

const CaseStudies = () => {
  // Temporarily disabled — return null to hide the Success Stories section
  return null;
  const chartData1 = [
    { month: 'Jan', before: 45, after: 120 },
    { month: 'Feb', before: 52, after: 185 },
    { month: 'Mar', before: 48, after: 240 },
    { month: 'Apr', before: 61, after: 320 },
    { month: 'May', before: 55, after: 450 },
    { month: 'Jun', before: 67, after: 580 },
  ];

  const chartData2 = [
    { month: 'Jan', views: 120000 },
    { month: 'Feb', views: 280000 },
    { month: 'Mar', views: 450000 },
    { month: 'Apr', views: 680000 },
    { month: 'May', views: 920000 },
    { month: 'Jun', views: 1200000 },
  ];

  const pieData = [
    { name: 'YouTube', value: 45, color: '#FFD700' },
    { name: 'Instagram', value: 25, color: '#FF6B6B' },
    { name: 'TikTok', value: 20, color: '#1A1A1A' },
    { name: 'Other', value: 10, color: '#FAFAFA' },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Brand Transformation",
      client: "FashionForward",
      challenge: "Low engagement rates and declining sales",
      solution: "Complete video content strategy overhaul",
      results: "300% increase in engagement, 250% boost in sales",
      metrics: {
        icon: TrendingUp,
        value: "+300%",
        label: "Engagement Growth"
      },
      chartComponent: (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData1}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="before" fill="hsl(var(--muted))" />
            <Bar dataKey="after" fill="hsl(var(--tape-yellow))" />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 2,
      title: "Tech Startup Video Series",
      client: "InnovateTech",
      challenge: "Complex product needed clear explanation",
      solution: "Educational video series with animated graphics",
      results: "1.2M views across platforms, 40% conversion rate",
      metrics: {
        icon: Eye,
        value: "1.2M",
        label: "Total Views"
      },
      chartComponent: (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData2}>
            <XAxis dataKey="month" />
            <YAxis />
            <Line type="monotone" dataKey="views" stroke="hsl(var(--coral-accent))" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 3,
      title: "Multi-Platform Campaign",
      client: "GlobalBrand",
      challenge: "Needed platform-specific content strategy",
      solution: "Tailored content for each social platform",
      results: "45% increase in brand awareness across all platforms",
      metrics: {
        icon: Users,
        value: "+45%",
        label: "Brand Awareness"
      },
      chartComponent: (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )
    }
  ];

  return (
    <section className="py-8 px-4 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="sticky-note p-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              <span className="text-coral-accent">Success</span> Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real challenges, creative solutions, measurable results
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="sticky-note p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-charcoal mb-2">
                      {study.title}
                    </h3>
                    <p className="text-coral-accent font-semibold">
                      Client: {study.client}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Results</h4>
                      <p className="text-tape-yellow font-semibold">{study.results}</p>
                    </div>
                  </div>

                  {/* Metric highlight */}
                  <div className="mt-6 p-4 bg-accent rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-tape-yellow rounded-lg">
                        <study.metrics.icon className="w-5 h-5 text-charcoal" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-charcoal">
                          {study.metrics.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {study.metrics.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="sticky-note p-6">
                  <Card className="border-none shadow-none bg-transparent p-4">
                    {study.chartComponent}
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;