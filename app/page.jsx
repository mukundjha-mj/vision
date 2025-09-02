import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { features } from "../data/features";
import { howItWorks } from "@/data/howItWorks";

export default function Home() {
  return (
        <div>
          <div className="grid-background "></div>


            <HeroSection />

            <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
              <div className="container  mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerfull feature for Your Career Growth</h2>
                <HoverEffect key={features} items={features} className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"} />
              </div>
            </section>

            <section className="w-full py-12 md:py-24  bg-muted/50">
              <div className="container  mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">50+</h3>
                    <p className="text-muted-foreground">Industries Covered</p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">1000+</h3>
                    <p className="text-muted-foreground">Interview Questions</p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">95%</h3>
                    <p className="text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">24/7</h3>
                    <p className="text-muted-foreground">AI Support</p>
                  </div>
                </div>
              </div>
            </section>


            <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
              <div className="container  mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">

                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p>Four simple steps to accelerate your career growth</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                </div>
              </div>
            </section>
        </div>
  );
}
